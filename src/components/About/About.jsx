import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const About = () => {
    return (
        <div className="about container" id="about">
            <div className="about__topbar"> 
                <span>O компании </span>
                <Link href="/catalog" className='pop'>
                    Посмотреть каталог
                    <Image width={28} height={28} src="/arrow-right.svg" alt="arrow" draggable="false" />
                </Link>
            </div>
            <div className="about__main">
                <p className="about__main-item">Вся наша продукция прошла обязательную <span className="about__main-subtext">сертификацию</span> и соответствует самым <span className="about__main-subtext">высоким</span> стандартам</p>
                <Link className="about__more pop" href="/catalog">
                    Посмотреть каталог
                    <Image width={28} height={28} src="/arrow-right.svg" alt="arrow" draggable="false" />
                </Link>
                <Link className="about__main-item pop" href="/catalog/infokioski">
                    <Image width={364} height={189} className="about__main-card-img" src="/Mask group.png" alt="" draggable="false" />
                    <p>Информационные киоски </p>
                </Link>
                <Link className="about__main-item pop" href="/catalog/paneli">
                    <Image width={150} height={119} className="about__main-card-img" src="/laptop2.png" alt="" draggable="false" />
                    <p>Сенсорные панели</p>
                </Link>
                <Link className="about__main-item pop" href="/catalog/proc">
                    <Image width={205} height={159} className="about__main-card-img" src="/laptop3.png" alt="" draggable="false" />
                    <p>INtel core процессоры </p>
                </Link>
                <Link className="about__main-item pop" href="/catalog/stendy">
                    <Image width={200} height={170} className="about__main-card-img" src="/laptop4.png" alt="" draggable="false" />
                    <p>Мобильные стенды</p>
                </Link>
            </div>
        </div>
    )
}

export default About