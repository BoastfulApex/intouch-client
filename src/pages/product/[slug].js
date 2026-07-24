import { useState } from 'react'
import Contacts from "@/components/Contacts/Contacts";
import Partners from "@/components/Partners/Partners";
import Product from "@/components/Product/Product";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Product.module.scss'

import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation"; 
import { setPopup } from '@/store/slices/popupSlice';
import { useDispatch } from 'react-redux';

export default function ProductPage({product}) {
    const router = useRouter()
    const dispatch = useDispatch()
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const downloadFile = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${product.File.url}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = product.File.name || "file";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Head>
                <title>{`${product.Title} — купить в Ташкенте | Intouch`}</title>
                <meta name="description" content={product.Description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href={`https://intouch.uz/product/${product.Slug}`} />
                <meta property="og:type" content="product" />
                <meta property="og:title" content={`${product.Title} — Intouch`} />
                <meta property="og:description" content={product.Description} />
                <meta property="og:url" content={`https://intouch.uz/product/${product.Slug}`} />
                {product.Photos?.[0]?.url && (
                    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.Photos[0].url}`} />
                )}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: product.Title,
                            description: product.Description,
                            image: product.Photos?.map((p) => `${process.env.NEXT_PUBLIC_SERVER_URL}${p.url}`) || [],
                            url: `https://intouch.uz/product/${product.Slug}`,
                            brand: { "@type": "Brand", name: "Intouch" },
                            offers: {
                                "@type": "Offer",
                                price: product.Price,
                                priceCurrency: "USD",
                                availability: "https://schema.org/InStock",
                                url: `https://intouch.uz/product/${product.Slug}`,
                            },
                        }),
                    }}
                />
            </Head>
            <section className={styles.product}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.bread}>
                        <Link href="/catalog" className={styles.breadItem}>Каталог</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        <Link href="#!" className={`${styles.breadItem} ${styles.active}`}>{product.Title}</Link>
                    </div>
                </div>
                <div className='container'>
                    <h1 className={styles.title}>{product.Title}</h1>
                </div>
                <div className={`${styles.content} container`}>
                    <div className={`${styles.swiper} productpage-swiper`}>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Thumbs]}
                            className={styles.slides}
                        >
                            {product.Photos.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.Photos[index].url}`}
                                        alt={`${product.Title} — фото ${index + 1}`}
                                        width="325"
                                        height="325"
                                        draggable="false"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[Thumbs]}
                            className={styles.thumbs}
                            direction="horizontal" // Горизонтальное направление по умолчанию
                            breakpoints={{
                                576: { 
                                    direction: "vertical", // Вертикальное направление для ширины от 576px
                                },
                            }}
                        >
                            {product.Photos.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image  
                                        draggable="false"
                                        alt={`Превью`}
                                        width={100}
                                        height={100}
                                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.Photos[index].url}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{product.Title}</h2>
                        <p className={styles.subtitle}>Технические характеристики</p>
                        {product.Attr && Object.entries(product.Attr).map(([key, value], index) => (
                            <div className={styles.attr} key={index}>
                                <span>{key}</span>
                                <p>{value}</p>
                            </div>
                        ))}
                        <p className={styles.desc}>{product.Description}</p>
                        {product.File !== null && (
                            <button onClick={downloadFile} className={styles.file} download>
                                Все характеристики
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                            </button>
                        )}
                        <div className={styles.flb}></div>
                        <div className={styles.action}>
                            <p className={styles.price}>от {product.Price}$</p>
                            <button className={`btn pop ${styles.btn}`} onClick={() => {dispatch(setPopup("order"))}}>Заказать</button>
                        </div>
                    </div>
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
    const slug = context.params.slug;

    try {
        const res = await fetch(`https://intouch-api.intouch.uz/api/products?populate=*&filters[Slug][$eq]=${slug}`);
        const json = await res.json();

        const productData = json.data;


        if (!productData) {
            return { notFound: true };
        }

        return {
            props: {
                product: productData[0]
            }
        };

    } catch (err) {
        console.error(err);
        return { notFound: true };
    }
}