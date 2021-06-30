import React from 'react';
import {NavLink,Link} from 'react-router-dom';


export default function Card({product,ratingPercentage}) {


    return (
            <div className="col-md-3">
                <Link to={`/products/${product.id}`}><div href="#" className="card card-product-grid">
                    <a href="#" className="img-wrap"> <img src={product.img1}/> </a>
                    <figcaption className="info-wrap">
                    <a href="#" className="title">{product.name}</a>
                        <a href="#" className="title">{product.company}</a>
                            <div className="rating-wrap mb-3">
                                <ul className="rating-stars">
                                    <li style={{width:ratingPercentage}} className="stars-active"> 
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                    </li>
                                </ul>
                                <div className="label-rating">{product.rating}/5</div>
                            </div>
                        <div className="price mt-1">{product.price}</div>
                    </figcaption>
                </div></Link>
            </div>
    )
}

