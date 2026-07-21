import { useEffect, useRef } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

const CatalogHeader = () => {
    const router = useRouter();
    const categories = useSelector(state => state.categories)

    return (
        <>
            <h1 className="catalog__title">Каталог товаров</h1>
            <div className="catalog__menu" id="catalog-tabs">
                {categories.value.map((cat, index) => (
                    <Link href={`/catalog/${cat.slug}`} key={index} scroll={false} className={`catalog__btn pop ${router.asPath === `/catalog/${cat.slug}` ? 'active' : ''}`}>{cat.Title}</Link>
                ))}
                <Link href="/catalog" scroll={false} className={`catalog__btn pop ${router.asPath === '/catalog' ? 'active' : ''}`}>Все</Link>
            </div>
        </>
    )
}

export default CatalogHeader;