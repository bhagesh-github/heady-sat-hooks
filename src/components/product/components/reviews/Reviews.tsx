import React from 'react';
import './Reviews.scss';
import { ProductReviews } from '../../../../models/product';
import Rating from '../../../rating';

const Reviews: React.FunctionComponent<{review: ProductReviews}> = ({review}) => {
    return (
        <div className="reviews content-box">
            <div className="reviews-content-box">
                <div className="title">
                    <h2>{`${review.count} Reviews for ${review.product_name}`}</h2>
                    <div className="roverview"><Rating count={review.average_rating}/> <span>{review.average_rating} ({review.count} reviews)</span></div>
                </div>
                <div className="reviews">
                    {
                        review.post.map(post => {
                            return (
                                <div className="review" key={post.id}>
                                    <div className="review-user">
                                        <div className="avatar">
                                            <img src={post.user_image} alt=""/>
                                        </div>
                                        <div className="user-info">
                                            <div>{post.username}</div>
                                            <div>{post.post_date}</div>
                                        </div>
                                    </div>
                                    <div className="review-title">
                                        <h4>{post.post_title}</h4>
                                        <Rating count={post.user_rating}/>
                                    </div>
                                    <div className="review-body">
                                        <p>{post.post_body}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews;