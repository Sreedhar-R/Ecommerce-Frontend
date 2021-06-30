import React, { useState } from 'react';
import Navbar from './Navbar';
import * as datas from './Schema.json';

 const CardExpand = props => {

    const [products] = useState(datas.default.data);
    const [image, setImage] = useState();
    const currId = props.match.params.id ;
    const product = products.find(product => product.id === currId);
    const ratingPercentage = (product.rating*100)/5 + '%';
    // console.log(product);
    
    
    function handleImageClick(e){
        setImage(e.target.src);
    }
    return (
        <>
        <Navbar/>
        <div style={{marginTop:"20px"}} >
            <div className="card">
                <div className="row no-gutters">
                    <aside className="col-md-6">
                        <article className="gallery-wrap"> 
                            <div className="img-big-wrap">
                            <a href="#"><img src={image?image:product.img1}/></a>
                            </div> 
                            <div className="thumbs-wrap" onClick={handleImageClick}>
                                <li  className="item-thumb"> <img src={product.img1}/></li>
                                <li  className="item-thumb"> <img src={product.img2}/></li>
                                <li  className="item-thumb"> <img src={product.img3}/></li>
                                <li  className="item-thumb"> <img src={product.img4}/></li>
                                <li  className="item-thumb"> <img src={product.img5}/></li>
                            </div> 
                        </article>
                    </aside>
                    <main className="col-md-6 border-left">                                 
                        <article className="content-body">
                        <h2 className="title">{product.name}</h2>

                        <div className="rating-wrap my-3">
                            <ul className="rating-stars">
                                <li style={{width:ratingPercentage}} className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <small className="label-rating text-muted">132 reviews</small>
                            <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                        </div>

                        <div className="mb-3"> 
                            <var className="price h4">{product.price}</var> 
                            <span className="text-muted">/{product.actualPrice}</span> 
                        </div> 

                        <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>

                        <dl className="row">
                        <dt className="col-sm-3">Brand</dt>
                        <dd className="col-sm-9">{product.company}</dd>

                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">{product.color}</dd>

                        <dt className="col-sm-3">Delivery</dt>
                        <dd className="col-sm-9">Russia, USA, and Europe </dd>
                        </dl>

                        <hr/>
                            <div className="row">
                                <div className="form-group col-md flex-grow-0">
                                    <label>Quantity</label>
                                    <div className="input-group mb-3 input-spinner">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                    </div>
                                    <input type="text" className="form-control" value="1"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-light" type="button" id="button-minus"> − </button>
                                    </div>
                                    </div>
                                </div> 
                                <div className="form-group col-md">
                                        <label>Select size</label>
                                        <div className="mt-2">
                                            <label className="js-check btn btn-check active">
                                                <input type="radio" name="option_size" value="option1" />
                                                <span>S</span>
                                            </label>
                                            <label className="js-check btn btn-check">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>M</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>L</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>XL</span>
                                            </label>
                                            <label className="js-check btn btn-check ">
                                                <input type="radio" name="option_size" value="option1"/>
                                                <span>XXL</span>
                                            </label>
                                        </div>
                                </div> 
                            </div> 
                            <a href="#" className="btn  btn-primary"> Buy now </a>
                            <a href="#" className="btn  btn-outline-primary" style={{marginLeft:"10px"}}> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>  </a>
                        </article>
                    </main> 
                </div> 
            </div>
        </div>
    </>
    )
}

export default CardExpand;