import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Intro from "@/components/Intro/Intro";
import Partners from "@/components/Partners/Partners";
import Reviews from "@/components/Reviews/Reviews";
import WhyUs from "@/components/WhyUs/WhyUs";
import { setPopup } from "@/store/slices/popupSlice";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  
  return (
    <>
      <Head>
        <title>Intouch — интерактивные панели, доски и инфокиоски в Ташкенте</title>
        <meta name="description" content="Intouch — интерактивные сенсорные панели, интерактивные доски, инфокиоски и профессиональные дисплеи в Узбекистане. Продажа, установка и поддержка. Ташкент." />
        <meta name="keywords" content="интерактивная панель, интерактивная доска, инфокиоск, сенсорная панель, интерактивный экран, Ташкент, Узбекистан, interaktiv doska, interaktiv panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://intouch.uz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Intouch — интерактивные панели, доски и инфокиоски в Ташкенте" />
        <meta property="og:description" content="Интерактивные сенсорные панели, доски, инфокиоски и профессиональные дисплеи в Узбекистане. Продажа, установка и поддержка." />
        <meta property="og:url" content="https://intouch.uz/" />
        <meta property="og:image" content="https://intouch.uz/intro.png" />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Intro />
      <About />
      <div className="container">
        <div className="mission" id="mission">
          <div className="mission__topbar">
            <span>Миссия компании</span>
            <Link href="#!" className="pop">
              Подробнее
              <Image width={28} height={28} src="/arrow-right.svg" alt="arrow" draggable="false" />
            </Link>
          </div>
          <div className="mission__main">
            <div className="mission__main-video">
              <Image width={640} height={360} className="mission__main-img" priority src="/missionbg.png" alt="" draggable="false" />
              <button aria-label="play" className="popup-open mission__main-play" type="button" onClick={() => dispatch(setPopup("video"))}>
                <Image width={64} height={64} src="/play.svg" alt="" draggable="false" />
              </button>
            </div>
            <p className="mission__main-text">Мы предлагаем максимальное удобство для пользователей с применением ориентированного на пользователя пк или андроид и предлагаем пользователям ценность надежности, основанной на точности и долговечности, добавленной к лучшей в мире технике.</p>
            <Link className="mission__more" href="#!">
              Подробнее
              <Image width={28} height={28} src="/arrow-right.svg" alt="arrow" draggable="false" />
            </Link>
          </div>
        </div>

        <div className="product" id="products">
          <div className="product__topbar">
            <span>Продукты</span>
          </div>
          <div className="product__main">
            <button className="product__main-item popup-open pop" type="button">
              <Image width={792} height={283} src="/pr1.png" draggable={false} alt="Процессор Core™ i3" />
            </button>
            <button className="product__main-item popup-open pop" type="button">
              <Image width={390} height={283} src="/pr2.png" draggable={false} alt="Горизонтальный инфокиоск 43 Black" />
            </button>
            <button className="product__main-item popup-open pop" type="button">
              <Image width={390} height={283} src="/pr3.png" draggable={false} alt="Спикерфон" />
            </button>
            <Link className="product__main-item pop" href="/catalog">
              <Image width={390} height={578} src="/pr4.png" alt="" draggable="false" />
              <div className="product__main-item-link">
                <Image width={70} height={70} src="/product.svg" alt="" draggable="false" />
                <p>Узнать больше</p>
              </div>
            </Link>
            <Link className="product__main-item" href="/catalog">
              <Image width={294} height={147} className="product__main-item-pic" priority src="/pr5.png" alt="" draggable="false" />
              <div className="product__more">
                Подробнее
                <Image width={28} height={28} src="/arrow-right.svg" alt="arrow" draggable="false" />
              </div>
            </Link>
          </div>
        </div>

        <WhyUs />
        <Reviews />
        <Partners />
        <Contacts />
      </div>
    </>
  );
}
