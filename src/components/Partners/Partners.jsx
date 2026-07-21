import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';

const Partners = () => {
    const partners = useSelector(state => state.partners.value) || []

    if (partners.length === 0) {
        return null
    }

    return (
        <div className="partners" id="partners">
            <div className="container">
                <div className="partners__topbar"><span>Наши партнеры </span></div>
            </div>
            <div className="partners__main">
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            spaceBetween: 50,
                        },
                        768: {
                            spaceBetween: 70,
                        },
                        1024: {
                            spaceBetween: 125,
                        },
                    }}
                    className="partners__swiper swiper"
                >
                    {partners.map((partner, i) => (
                        <SwiperSlide className="swiper-slide"> 
                            <Image src={`${process.env.NEXT_PUBLIC_SERVER_URL}${partner.Logo.url}`} alt="" draggable="false" width={379} height={56} />
                        </SwiperSlide>
                    ))}
                    {partners.map((partner, i) => (
                        <SwiperSlide className="swiper-slide"> 
                            <Image src={`${process.env.NEXT_PUBLIC_SERVER_URL}${partner.Logo.url}`} alt="" draggable="false" width={379} height={56} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Partners