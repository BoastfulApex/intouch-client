const SITE_URL = "https://intouch.uz";

function generateSiteMap(products, categories) {
    const staticPages = ["", "/catalog", "/policy"];

    const urls = [
        ...staticPages.map((p) => `${SITE_URL}${p}`),
        ...categories.map((c) => `${SITE_URL}/catalog/${c.slug}`),
        ...products.map((p) => `${SITE_URL}/product/${p.Slug}`),
    ];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`
    )
    .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
    let products = [];
    let categories = [];

    try {
        const [productsRes, categoriesRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`),
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/categories`),
        ]);
        products = (await productsRes.json()).data || [];
        categories = (await categoriesRes.json()).data || [];
    } catch (err) {
        console.error("Sitemap fetch error:", err);
    }

    res.setHeader("Content-Type", "text/xml");
    res.write(generateSiteMap(products, categories));
    res.end();

    return { props: {} };
}

export default function SiteMap() {
    return null;
}
