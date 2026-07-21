import React, { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { setPopup } from '@/store/slices/popupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setCategories } from '@/store/slices/categoriesSlice'
import { setProducts } from '@/store/slices/productsSlice'
import { setReviews } from '@/store/slices/reviewsSlice'
import { setPartners } from '@/store/slices/partnersSlice'

const Header = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    
    const [menu, setMenu] = useState(false)

    const categories = useSelector(state => state.categories)
    const products = useSelector(state => state.products)
    const reviews = useSelector(state => state.reviews)
    const partners = useSelector(state => state.partners)

    useEffect(() => {
        if(categories.value?.length === 0) {
            fetchCategories()
        }
    }, [categories])

    useEffect(() => {
        if(products.value?.length === 0) {
            fetchProducts()
        }
    }, [products])

    useEffect(() => {
        if(reviews.value?.length === 0) {
            fetchReviews()
        }
    }, [reviews])

    useEffect(() => {
        if(partners.value?.length === 0) {
            fetchPartners()
        }
    }, [partners])

    const fetchCategories = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/categories`)
            if (!res.ok) return
            const json = await res.json()
            const data = json.data
            if (data) dispatch(setCategories(data))
        } catch (error) {
            console.error("Error fetching categories:", error)
        }
    }

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/?populate=*`)
            if (!res.ok) return
            const json = await res.json()
            const data = json.data
            if (data) dispatch(setProducts(data))
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    const fetchReviews = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/?populate=*`)
            if (!res.ok) return
            const json = await res.json()
            const data = json.data
            if (data) dispatch(setReviews(data))
        } catch (error) {
            console.error("Error fetching reviews:", error)
        }
    }

    const fetchPartners = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/partners/?populate=*`)
            if (!res.ok) return
            const json = await res.json()
            const data = json.data
            if (data) dispatch(setPartners(data))
        } catch (error) {
            console.error("Error fetching partners:", error)
        }
    }

    return (
        <>
            <header className={`${styles.header} ${menu && styles.open}`}>
                <div className={`container ${styles.nav}`}>
                    <div className={styles.left}>
                        <button type="button" className={`${styles.burger} ${menu && styles.open}`}
                            onClick={() => setMenu(!menu)}
                        >
                            <span></span>
                        </button>
                        <Link href="/" className={styles.logo} onClick={() => setMenu(false)}>
                            <Image src="/logowhite.svg" alt="intouch" draggable={false} width={50} height={46}/>
                        </Link>
                        <ul className={styles.list}>
                            <li className={styles.li}>
                                <Link href="/catalog" className={`${styles.link} ${router.asPath.startsWith('/catalog') ? styles.active : ""}`}>Каталог</Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/#about" className={`${styles.link} ${router.asPath.startsWith('/#about') ? styles.active : ""}`}>О компании</Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/#reviews" className={`${styles.link} ${router.asPath.startsWith('/#reviews') ? styles.active : ""}`}>Отзывы</Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/#partners" className={`${styles.link} ${router.asPath.startsWith('/#partners') ? styles.active : ""}`}>Партнеры</Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/#contacts" className={`${styles.link} ${router.asPath.startsWith('/#contacts') ? styles.active : ""}`}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <button type="button" className={`${styles.btn} btn pop`} onClick={() => dispatch(setPopup("callback"))}>Заказать звонок</button>
                    </div>
                </div>
            </header>
            <div className={`${styles.menu} ${menu && styles.open}`}>
                <Link onClick={() => setMenu(false)} href="/catalog" className={styles.link}>Каталог</Link>
                <Link onClick={() => setMenu(false)} href="/#about" className={styles.link}>О компании</Link>
                <Link onClick={() => setMenu(false)} href="/#reviews" className={styles.link}>Отзывы</Link>
                <Link onClick={() => setMenu(false)} href="#partners" className={styles.link}>Партнеры</Link>
                <Link onClick={() => setMenu(false)} href="#contacts" className={styles.link}>Контакты</Link>
                <Link onClick={() => setMenu(false)} href="tel:+998980009999" className={`${styles.link} ${styles.mta}`}>+998 91 172-99-99</Link>
                <Link onClick={() => setMenu(false)} href="tel:+998993559999" className={`${styles.link}`}>+998 90 172-99-99</Link>
            </div>
        </>
    )
}

export default Header