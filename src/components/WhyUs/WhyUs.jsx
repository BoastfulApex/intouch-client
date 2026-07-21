import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const WhyUs = () => {
    return (
        <div className="whyus">
            <div className="whyus__topbar">
                <span>Почему мы?</span>
            </div>
            <div className="whyus__main">
                <div className="whyus__card">
                    <h2 className="whyus__card-title">Высшее качество</h2>
                    <p className="whyus__card-text">
                        Вся наша продукция прошла обязательную сертификацию и
                        соответствует самым высоким стандартам
                    </p>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Композитные материалы</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Отличная сборка</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Гарантия товара на год</span>
                    </div>
                    <div className="fa"></div>
                    <Link className="whyus__card-link" href="/catalog">
                        <Image
                            width={24}
                            height={24}
                            src="/market.svg"
                            alt=""
                            draggable="false"
                        />
                        <span>Посмотреть каталог</span>
                    </Link>
                </div>
                <div className="whyus__card">
                    <h2 className="whyus__card-title">Оплата</h2>
                    <p className="whyus__card-text">
                        Условия оплаты (100% предоплата, рассрочка, наличные,
                        перечислением и т. д.)
                    </p>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Композитные материалы</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Отличная сборка</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Гарантия товара на год</span>
                    </div>
                    <div className="fa"></div>
                    <Link className="whyus__card-link" href="/catalog">
                        <Image
                            width={24}
                            height={24}
                            src="/market.svg"
                            alt=""
                            draggable="false"
                        />
                        <span>Посмотреть каталог</span>
                    </Link>
                </div>
                <div className="whyus__card">
                    <h2 className="whyus__card-title">Скидка</h2>
                    <p className="whyus__card-text">
                        Условия предоставления скидок (оптовые заказы, акции,
                        партнерские программы).
                    </p>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Композитные материалы</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Отличная сборка</span>
                    </div>
                    <div className="whyus__card-info">
                        <Image
                            height={24}
                            width={24}
                            src="/done.svg"
                            alt="done"
                            draggable="false"
                        />
                        <span>Гарантия товара на год</span>
                    </div>
                    <div className="fa"></div>
                    <Link className="whyus__card-link" href="/catalog">
                        <Image
                            width={24}
                            height={24}
                            src="/market.svg"
                            alt=""
                            draggable="false"
                        />
                        <span>Посмотреть каталог</span>
                    </Link>
                </div>
            </div>
            <div className="whyus__slider">
                <Swiper 
                    spaceBetween={15} 
                    slidesPerView="auto"
                    className="swiper whyus__swiper"
                >
                    <SwiperSlide className="swiper-slide whyus__card">
                        <h2 className="whyus__card-title">Высшее качество</h2>
                        <p className="whyus__card-text">
                            Вся наша продукция прошла обязательную
                            сертификацию и соответствует самым высоким
                            стандартам
                        </p>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Композитные материалы</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Отличная сборка</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Гарантия товара на год</span>
                        </div>
                        <div className="fa"></div>
                        <Link className="whyus__card-link" href="/catalog">
                            <Image
                                width={24}
                                height={24}
                                src="/market.svg"
                                alt=""
                                draggable="false"
                            />
                            <span>Посмотреть каталог </span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide whyus__card">
                        <h2 className="whyus__card-title">Оплата</h2>
                        <p className="whyus__card-text">
                            Условия оплаты (100% предоплата, рассрочка,
                            наличные, перечислением и т. д.)
                        </p>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Композитные материалы</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Отличная сборка</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Гарантия товара на год</span>
                        </div>
                        <div className="fa"></div>
                        <Link className="whyus__card-link" href="/catalog">
                            <Image
                                width={24}
                                height={24}
                                src="/market.svg"
                                alt=""
                                draggable="false"
                            />
                            <span>Посмотреть каталог</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide whyus__card">
                        <h2 className="whyus__card-title">Скидка</h2>
                        <p className="whyus__card-text">
                            Условия предоставления скидок (оптовые заказы,
                            акции, партнерские программы).
                        </p>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Композитные материалы</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Отличная сборка</span>
                        </div>
                        <div className="whyus__card-info">
                            <Image
                                height={24}
                                width={24}
                                src="/done.svg"
                                alt="done"
                                draggable="false"
                            />
                            <span>Гарантия товара на год</span>
                        </div>
                        <div className="fa"></div>
                        <Link className="whyus__card-link" href="/catalog">
                            <Image
                                width={24}
                                height={24}
                                src="/market.svg"
                                alt=""
                                draggable="false"
                            />
                            <span>Посмотреть каталог </span>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default WhyUs;
