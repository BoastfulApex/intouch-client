import Image from 'next/image'
import React from 'react'

import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <div className={styles.item}>
                        <Link href="/#intro" className={styles.logo}>
                            <Image src="/logowhite.svg" alt="intouch" draggable={false} width={50} height={46} />
                        </Link>
                        <p className={styles.year}>© 2020 - 2026</p>
                        <Link href="https://keypix.uz" target="_blank" className={styles.keypix}>
                            <Image src="/keypix.svg" alt="keypix - разработка сайтов в ташкенте" width={768} height={158} draggable={false}/>
                            <p>Разработка сайтов</p>
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>Меню</p>
                        <Link href="/#intro" className={styles.link}>Главная</Link>
                        <Link href="/catalog" className={styles.link}>Каталог</Link>
                        <Link href="/#about" className={styles.link}>О компании</Link>
                        <Link href="#contacts" className={styles.link}>Контакты</Link>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>Соц. сети</p>
                        <Link href="https://instagram.com/intouch.uz" target="_blank" className={styles.link}>
                            <Image src="/insta.svg" alt="intstagram intouch.uz" width={24} height={24} draggable={false} />
                            Instagram
                        </Link>
                        <Link href="https://t.me/intouch_uzb" target="_blank" className={styles.link}>
                            <Image src="/tg.svg" alt="intstagram intouch.uz" width={24} height={24} draggable={false} />
                            Telegram
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>Контакты</p>
                        <Link href="tel:+998980009999" className={styles.link}>+998 91 172-99-99</Link>
                        <Link href="tel:+998993559999" className={styles.link}>+998 90 172-99-99</Link>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Все права защищены</p>
                    <Link href="/policy">Политика конфиденциальности</Link>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.img}>
                        <Image src="/intouch.svg" alt="intouch.uz by keypix - разработка сайтов" width={450} height={39} draggable={false}/>
                    </div>
                    <p className={styles.text}>Вся наша продукция прошла обязательную сертификацию и соответствует самым высоким стандартам</p>
                    <div className={styles.el}>
                        <span>Адрес</span>
                        <p>г. Ташкент, Юнусабадский район, 2-й проезд Турккургон 2</p>
                    </div>
                    <div className={styles.el}>
                        <span>Контакты</span>
                        <Link href="tel:+998980009999">+998 91 172-99-99</Link>
                        <Link href="tel:+998993559999">+998 90 172-99-99</Link>
                    </div>
                    <div className={styles.el}>
                        <span>Время работы</span>
                        <p>Пн. – Сб.: с 9:00 до 18:00</p>
                    </div>
                    <div className={styles.el}>
                        <span>Почта</span>
                        <Link href="mailto:info@in-touch.uz">info@in-touch.uz</Link>
                    </div>
                    <div className={styles.el}>
                        <span>Мы в соц. сетях</span>
                        <div className={styles.links}>
                            <Link href="https://instagram.com/intouch.uz" target="_blank" className='pop'> 
                                <Image src="/insta-2.svg" width={48} height={48} alt="" draggable="false" />
                            </Link>
                            <Link href="https://t.me/intouch_uzb" target="_blank" className='pop'> 
                                <Image src="/tg-2.svg" width={48} height={48} alt="" draggable="false" />
                            </Link>
                        </div>
                    </div>
                    <Link href="https://keypix.uz" target="_blank" className={styles.keypix}>
                        <Image src="/keypix.svg" alt="keypix - разработка сайтов в ташкенте" width={768} height={158} draggable={false}/>
                        <p>Разработка сайтов</p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer