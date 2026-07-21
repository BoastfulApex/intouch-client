#!/bin/bash

# Manual deployment script for intouch-client
# Run this on the server: bash deploy.sh

set -e

# Configuration
APP_NAME="intouch-client"
APP_PORT=3129
SERVER_PATH="/var/www/intouch-client"
DOMAIN="intouch.keypix.uz"
REPO_URL="https://github.com/YOUR_USERNAME/intouch-client.git"
BRANCH="main"

echo "=== Starting deployment for $APP_NAME ==="

# Install Node.js if not installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install PM2 if not installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

# Clone or pull repository
if [ ! -d "$SERVER_PATH" ]; then
    echo "Cloning repository..."
    git clone $REPO_URL $SERVER_PATH
else
    echo "Pulling latest changes..."
    cd $SERVER_PATH
    git fetch origin
    git reset --hard origin/$BRANCH
fi

cd $SERVER_PATH

# Create .env.local if not exists
if [ ! -f ".env.local" ]; then
    echo "Creating .env.local - please edit with your values!"
    cat > .env.local << 'EOF'
NEXT_PUBLIC_SERVER_URL=https://intouch-api.keypix.uz
NEXT_PUBLIC_BOT_TOKEN=YOUR_BOT_TOKEN
NEXT_PUBLIC_BOT_CHAT_ID=YOUR_CHAT_ID
EOF
fi

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build
echo "Building application..."
npm run build

# Create PM2 log directory
sudo mkdir -p /var/log/pm2

# Start or restart with PM2
echo "Starting application with PM2..."
if pm2 describe $APP_NAME > /dev/null 2>&1; then
    pm2 restart $APP_NAME
else
    pm2 start ecosystem.config.js
fi
pm2 save

# Setup PM2 startup script
pm2 startup systemd -u $USER --hp $HOME || true

# Setup Nginx if not configured
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"
if [ ! -f "$NGINX_CONF" ]; then
    echo "Setting up Nginx..."

    # Install Nginx if not installed
    if ! command -v nginx &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y nginx
    fi

    sudo cp $SERVER_PATH/nginx.conf.template $NGINX_CONF
    sudo ln -sf $NGINX_CONF /etc/nginx/sites-enabled/

    # Test and reload Nginx
    sudo nginx -t && sudo systemctl reload nginx

    echo "Nginx configured!"

    # Install Certbot and get SSL certificate
    if ! command -v certbot &> /dev/null; then
        echo "Installing Certbot..."
        sudo apt-get install -y certbot python3-certbot-nginx
    fi

    echo "Getting SSL certificate..."
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN || echo "SSL setup failed - you may need to run certbot manually"
fi

echo ""
echo "=== Deployment complete! ==="
echo "Application: $APP_NAME"
echo "Port: $APP_PORT"
echo "Domain: $DOMAIN"
echo "Path: $SERVER_PATH"
echo ""
echo "Useful commands:"
echo "  pm2 status          - Check app status"
echo "  pm2 logs $APP_NAME  - View logs"
echo "  pm2 restart $APP_NAME - Restart app"