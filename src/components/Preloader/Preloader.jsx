import React, { useState, useEffect } from 'react'

import styles from './Preloader.module.scss'

const Preloader = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsHidden(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${styles.preloader} ${isHidden ? styles.hide : ''}`}>
            <div className={styles.el}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>intouch</p>
        </div>
    )
}

export default Preloader