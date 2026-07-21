import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({product, key}) => {
    
    return (
        <Link href={`/product/${product.Slug}`} key={key} className="catalog__item popup-open pop" type="button">
            <div className="catalog__item-img">
                <Image width="325" height="325" src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.Photos[0].url}`} alt={product.Title} draggable={false} />
                <span className="catalog__item-span">Новинка</span>
            </div>
            <div className="catalog__item-content">
                <p className="catalog__item-price">от {product.Price}$</p>
                <p className="catalog__item-title">{product.Title}</p>
                <p className="catalog__item-btn">Заказать</p>
            </div>
        </Link>
    )
}

export default Product