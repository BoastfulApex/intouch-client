import CatalogContent from "@/components/Catalog/CatalogContent";
import CatalogHeader from "@/components/Catalog/CatalogHeader";
import Contacts from "@/components/Contacts/Contacts";
import Partners from "@/components/Partners/Partners";
import Head from "next/head";

export default function CatalogSlugPage({ products, category }) {
    
    return (
        <>
            <Head>
                <title>{category[0].Title} — Intouch</title>
                <meta name="description" content="Каталог продукции" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="container" id="intro">
                <div className="hero">
                <div className="hero__title">
                    <div className="hero__inner">
                    <div className="hero__inner-content">
                        <p className="hero__inner-text">Лучшее</p>
                        <p className="hero__inner-subtext">качество</p>
                    </div>
                    <p className="hero__inner-info">Широкий ассортимент интерактивных сенсорных панелей и экранов в Ташкенте</p>
                    </div>
                    <p className="hero__title-text">только с нами</p>
                    <p className="hero__p">Широкий ассортимент интерактивных сенсорных панелей и экранов в Ташкенте</p>
                </div>
                </div>

                <div className="catalog">
                <CatalogHeader />
                <CatalogContent products={products} />
                </div>
            </section>

            <div className="container">
                <Partners />
                <Contacts />
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { slug } = context.params;

    const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/categories?filters[slug][$eq]=${slug}`);
    const categoryJson = await categoryRes.json();
    const category = categoryJson.data;

    if (!category) {
        return {
            notFound: true,
        };
    }

    const productsRes = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?filters[Category][id][$eq]=${category[0].id}&populate=*`
    );
    
    const productsJson = await productsRes.json();

    const products = productsJson.data;

    return {
        props: {
            category,
            products,
        },
    };
}