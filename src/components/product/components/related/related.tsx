import React from 'react';
import './Related.scss';
import { RelatedProducts } from '../../../../models/product';

const Related: React.FunctionComponent<{products: RelatedProducts[]}> = ({products}) => {
    return (
        <div className="related-products">
            <h3>Related Products</h3>
            <div className="product-list">
                {
                    products.map(product => {
                        return (
                            <div className="product" key={product.id}>
                                <div className="product-inner">
                                    <div className="product-image">
                                        <img src={product.image}/>
                                    </div>
                                    <div className="product-description">
                                        <h4>{product.name}</h4>
                                        {
                                            product.discount_price ? (<div className="prices"><span className="strike-through">{product.actual_price}</span><span>{product.discount_price}</span></div>) : (<div className="prices"><span>{product.actual_price}</span></div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Related;