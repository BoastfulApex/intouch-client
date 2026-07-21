import React from 'react'
import Product from '../Product/Product'

const CatalogContent = ({products}) => {

    return (
        <div className="catalog__content" id="catalog-content">
            {products?.length > 0 ? (products.map((product, key) => (
                <Product product={product} key={key} />
            ))) : (
                <div className='notfount'>Товаров нет</div>
            )}
        </div>
    )
}

export default CatalogContent