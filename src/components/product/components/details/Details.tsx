import React from 'react';
import './Details.scss';
import { ProductInfo } from '../../../../models/product';
import Icon from '../../../icon';
import Rating from '../../../rating';

const Details: React.FunctionComponent<{details: ProductInfo}> = ({details}) => {
    const getIcon = (type: string) => {
        if (type === 'dispatch') {
            return <Icon icon="fa fa-truck"/>
        } else {
            return <Icon icon="fa fa-refresh"/>
        }
    }
    return (
        <div className="details content-box">
            <div className="details-content-box">
                <div className="details-content">
                    <div className="product-image">
                        <img src="assets/images/img-product-details.jpg" alt=""/>
                    </div>
                    <div className="product-description">
                        <div className="inner-box">
                            <h1>{details.product_name}</h1>
                            <div className="rating"><Rating count={details.average_rating ? details.average_rating : 0}/><span>({details.product_rating})</span></div>
                            <div className="prices">
                                {
                                    details.discount_price ? (<div className="prices"><span className="strike-through">{details.actual_price}</span><span>{details.discount_price}</span></div>) : (<div className="prices"><span>{details.actual_price}</span></div>)
                                }
                            </div>
                            <div className="features">
                                <ul>
                                    {
                                        details.features.map(feature => {
                                            return <li key={feature.name}><strong>{feature.name}</strong>: {feature.description}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="deliveries">
                                {
                                    details.delivery_policies.map(pol => {
                                        return <div key={pol.type}><span className="icon">{getIcon(pol.type)}</span><span>{pol.description}</span></div>
                                    })
                                }
                            </div>
                            <div className="colors">
                                <h6>Color:</h6>
                                <ul>
                                    {
                                        details.colors.map(color => {
                                            return <li key={color.id}><span style={{backgroundColor: color.color}}></span></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Details