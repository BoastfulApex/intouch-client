import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';

const Reviews = () => {
    const reviews = useSelector(state => state.reviews.value) || []

    if (reviews.length === 0) {
        return null
    }

    return (
        <section className="reviews" id="reviews">
            <div className="reviews__body">
                <div className="partners__topbar">
                    <span>Отзывы</span>
                </div>
                <div className="reviews__main">
                    <Swiper 
                        spaceBetween={15}
                        slidesPerView="auto"
                        // loop={true}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: true,
                        // }}
                        // modules={[Autoplay]}
                        className="reviews__swiper swiper"
                    >
                        {reviews.map((rev, i) => (
                            <SwiperSlide className="swiper-slide">
                                <div className="reviews__bg">
                                    <svg width="480" height="440" viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 440H448C465.673 440 480 425.673 480 408V126.219C480 108.546 465.673 94.2194 448 94.2194H440.371C409.443 94.2194 384.371 69.1474 384.371 38.2194V32C384.371 14.3269 370.044 0 352.371 0H205.184H32C14.3269 0 0 14.3269 0 32V408C0 425.673 14.3269 440 32 440Z" fill="#F4F4F4"></path></svg>
                                </div>
                                <div className="reviews__bg sm">
                                    <svg preserveAspectRatio="none" width="344" height="280" viewBox="0 0 344 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 280H312C329.673 280 344 265.673 344 248V84.8792C344 71.1155 332.842 59.9578 319.079 59.9578H313.621C292.549 59.9578 275.466 42.8752 275.466 21.8028C275.466 9.76147 265.705 0 253.663 0H147.048H32C14.3269 0 0 14.3269 0 32V248C0 265.673 14.3269 280 32 280Z" fill="#F4F4F4"></path></svg>
                                </div>
                                <div className="reviews__pin">
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_99_1095)"><path d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z" fill="#297FFF"></path><path d="M39.5443 26.9657C39.7323 26.0259 40.8918 25.6748 41.5696 26.3525L49.6485 34.4315C50.3262 35.1092 49.9752 36.2687 49.0353 36.4567L46.6346 36.9368C46.5509 36.9536 46.4741 36.9947 46.4137 37.055L42.5736 40.8952C42.5006 40.9681 42.4562 41.0648 42.4483 41.1677L41.9855 47.183C41.9174 48.0684 41.1444 48.7311 40.2589 48.6629C39.8762 48.6335 39.5166 48.4681 39.2452 48.1967L34.3733 43.324L28.0485 49.6496C27.5799 50.1182 26.8201 50.1182 26.3515 49.6496C25.9219 49.22 25.8861 48.5457 26.2441 48.0754L26.3515 47.9525L32.676 41.6267L27.8043 36.7559C27.2182 36.1697 27.1791 35.2437 27.6871 34.6123L27.8043 34.4817C28.0758 34.2103 28.4353 34.0449 28.8181 34.0155L34.8334 33.5528C34.9362 33.5448 35.0329 33.5004 35.1058 33.4274L38.946 29.5873C39.0063 29.527 39.0475 29.4501 39.0642 29.3664L39.5443 26.9657ZM41.4573 29.6344L41.4176 29.8371C41.3079 30.3854 41.0384 30.889 40.643 31.2843L36.8029 35.1245C36.3248 35.6026 35.6915 35.8938 35.0174 35.9457L30.7187 36.2757L39.724 45.281L40.0553 40.9836C40.1007 40.3938 40.3294 39.8352 40.7061 39.3845L40.8765 39.1981L44.7167 35.358C45.1121 34.9626 45.6156 34.6931 46.1639 34.5834L46.3653 34.5424L41.4573 29.6344Z" fill="white"></path></g><defs><clipPath id="clip0_99_1095"><rect width="75" height="75" fill="white"></rect></clipPath></defs></svg>
                                </div>
                                <div className="reviews__icon">
                                    <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.349 43.592C5.449 43.592 0 35.0553 0 25.0654C0 9.62657 9.62657 0.363262 25.6103 0V8.53677C13.9858 8.7184 10.3531 16.8919 10.3531 23.0674C10.3531 23.9756 10.3531 24.7022 10.5347 25.4287C11.9878 23.9756 14.5307 23.2491 16.7103 23.2491C22.1593 23.2491 26.3369 26.5185 26.3369 33.0573C26.3369 39.0512 21.9777 43.592 14.349 43.592ZM45.7716 43.592C36.8716 43.592 31.4226 35.0553 31.4226 25.0654C31.4226 9.62657 41.0492 0.363262 57.0329 0V8.53677C45.4084 8.7184 41.7757 16.8919 41.7757 23.0674C41.7757 23.9756 41.7757 24.7022 41.9573 25.4287C43.4104 23.9756 45.9533 23.2491 48.1329 23.2491C53.5819 23.2491 57.7595 26.5185 57.7595 33.0573C57.7595 39.0512 53.4002 43.592 45.7716 43.592Z" fill="#2B73DC"></path></svg>
                                </div>
                                <p className="reviews__p">{rev.Text}</p>
                                <div className="reviews__details">
                                    <div className="reviews__img">
                                        <Image width={46} height={46} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${rev.CompanyLogo.url}`} alt="" draggable={false} />
                                    </div>
                                    <div className="reviews__user"> 
                                        <span className="reviews__name">{rev.CompanyName}</span>
                                        <span className="reviews__dolzhnost">{rev.UserJob}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {reviews.map((rev, i) => (
                            <SwiperSlide className="swiper-slide">
                                <div className="reviews__bg">
                                    <svg width="480" height="440" viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 440H448C465.673 440 480 425.673 480 408V126.219C480 108.546 465.673 94.2194 448 94.2194H440.371C409.443 94.2194 384.371 69.1474 384.371 38.2194V32C384.371 14.3269 370.044 0 352.371 0H205.184H32C14.3269 0 0 14.3269 0 32V408C0 425.673 14.3269 440 32 440Z" fill="#F4F4F4"></path></svg>
                                </div>
                                <div className="reviews__bg sm">
                                    <svg preserveAspectRatio="none" width="344" height="280" viewBox="0 0 344 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 280H312C329.673 280 344 265.673 344 248V84.8792C344 71.1155 332.842 59.9578 319.079 59.9578H313.621C292.549 59.9578 275.466 42.8752 275.466 21.8028C275.466 9.76147 265.705 0 253.663 0H147.048H32C14.3269 0 0 14.3269 0 32V248C0 265.673 14.3269 280 32 280Z" fill="#F4F4F4"></path></svg>
                                </div>
                                <div className="reviews__pin">
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_99_1095)"><path d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z" fill="#297FFF"></path><path d="M39.5443 26.9657C39.7323 26.0259 40.8918 25.6748 41.5696 26.3525L49.6485 34.4315C50.3262 35.1092 49.9752 36.2687 49.0353 36.4567L46.6346 36.9368C46.5509 36.9536 46.4741 36.9947 46.4137 37.055L42.5736 40.8952C42.5006 40.9681 42.4562 41.0648 42.4483 41.1677L41.9855 47.183C41.9174 48.0684 41.1444 48.7311 40.2589 48.6629C39.8762 48.6335 39.5166 48.4681 39.2452 48.1967L34.3733 43.324L28.0485 49.6496C27.5799 50.1182 26.8201 50.1182 26.3515 49.6496C25.9219 49.22 25.8861 48.5457 26.2441 48.0754L26.3515 47.9525L32.676 41.6267L27.8043 36.7559C27.2182 36.1697 27.1791 35.2437 27.6871 34.6123L27.8043 34.4817C28.0758 34.2103 28.4353 34.0449 28.8181 34.0155L34.8334 33.5528C34.9362 33.5448 35.0329 33.5004 35.1058 33.4274L38.946 29.5873C39.0063 29.527 39.0475 29.4501 39.0642 29.3664L39.5443 26.9657ZM41.4573 29.6344L41.4176 29.8371C41.3079 30.3854 41.0384 30.889 40.643 31.2843L36.8029 35.1245C36.3248 35.6026 35.6915 35.8938 35.0174 35.9457L30.7187 36.2757L39.724 45.281L40.0553 40.9836C40.1007 40.3938 40.3294 39.8352 40.7061 39.3845L40.8765 39.1981L44.7167 35.358C45.1121 34.9626 45.6156 34.6931 46.1639 34.5834L46.3653 34.5424L41.4573 29.6344Z" fill="white"></path></g><defs><clipPath id="clip0_99_1095"><rect width="75" height="75" fill="white"></rect></clipPath></defs></svg>
                                </div>
                                <div className="reviews__icon">
                                    <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.349 43.592C5.449 43.592 0 35.0553 0 25.0654C0 9.62657 9.62657 0.363262 25.6103 0V8.53677C13.9858 8.7184 10.3531 16.8919 10.3531 23.0674C10.3531 23.9756 10.3531 24.7022 10.5347 25.4287C11.9878 23.9756 14.5307 23.2491 16.7103 23.2491C22.1593 23.2491 26.3369 26.5185 26.3369 33.0573C26.3369 39.0512 21.9777 43.592 14.349 43.592ZM45.7716 43.592C36.8716 43.592 31.4226 35.0553 31.4226 25.0654C31.4226 9.62657 41.0492 0.363262 57.0329 0V8.53677C45.4084 8.7184 41.7757 16.8919 41.7757 23.0674C41.7757 23.9756 41.7757 24.7022 41.9573 25.4287C43.4104 23.9756 45.9533 23.2491 48.1329 23.2491C53.5819 23.2491 57.7595 26.5185 57.7595 33.0573C57.7595 39.0512 53.4002 43.592 45.7716 43.592Z" fill="#2B73DC"></path></svg>
                                </div>
                                <p className="reviews__p">{rev.Text}</p>
                                <div className="reviews__details">
                                    <div className="reviews__img">
                                        <Image width={46} height={46} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${rev.CompanyLogo.url}`} alt="" draggable={false} />
                                    </div>
                                    <div className="reviews__user"> 
                                        <span className="reviews__name">{rev.CompanyName}</span>
                                        <span className="reviews__dolzhnost">{rev.UserJob}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Reviews