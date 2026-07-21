import Image from 'next/image'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from 'next/router';

const Intro = () => {
    const contentRef = useRef(null);
    const textRef = useRef(null);
    const descRef = useRef(null);
    const infoRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.__introAnimationPlayed) return;

        const timeout = setTimeout(() => {
            if (!contentRef.current || !infoRef.current || !descRef.current || !textRef.current || !heroRef.current) return;

            gsap.set([contentRef.current, infoRef.current, textRef.current, descRef.current], {
                y: 100,
            });
            gsap.set(heroRef.current, {
                opacity: 0,
            });

            gsap.to(contentRef.current, {
                y: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(textRef.current, {
                y: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(descRef.current, {
                y: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(infoRef.current, {
                y: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(heroRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                delay: 0.5,
            });

            // Помечаем, что анимация проиграна
            if (typeof window !== 'undefined') {
                window.__introAnimationPlayed = true;
            }
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="container" id="intro">
            <div className="hero">
                <div className="hero__title">
                    <div className="hero__inner">
                        <div className="hero__inner-content" ref={contentRef}>
                            <p className="hero__inner-text">Лучшее</p>
                            <p className="hero__inner-subtext">качество</p>
                        </div>
                        <p className="hero__inner-info" ref={infoRef}>Широкий ассортимент интерактивных сенсорных панелей и экранов в Ташкенте</p>
                    </div>
                    <div className="hero__title-text"><p ref={textRef}>только с нами</p></div>
                    <div className="hero__p"><p ref={descRef}>Широкий ассортимент интерактивных сенсорных панелей и экранов в Ташкенте</p></div>
                </div>
                <div className="hero__main" ref={heroRef}>
                    <Image loading="eager" priority width="772" height="440" className="hero__main-img" src="/image.webp" alt="" draggable="false" />
                    <div className="hero__main-inner">
                        <div className="hero__main-users-el"></div>
                        <div className="hero__main-users"> 
                            <Image width={144} height={64} src="/people.png" alt="" draggable="false" />
                            <div>
                                <p>12 000 +</p><span>Довольных клиентов</span>
                            </div>
                        </div>
                        <div className="hero__main-info">
                            <Image width={360}  height={268} src="/image (3).png" alt="IMG" draggable="false" />
                            <p>Более 100 видов мониторов</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro