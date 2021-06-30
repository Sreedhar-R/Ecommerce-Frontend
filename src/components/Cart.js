import React from 'react'

export default function Cart({name,size,color,price,actualPrice,image,brand}) {
    return (
            <tbody>
                <tr>
                    <td>
                        <figure className="itemside">
                            <div className="aside"><img src={image} className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">{name}</a>
                                        <p className="text-muted small">Size: {size}, Color: {color}, <br/> Brand: {brand}</p>
                                </figcaption>
                        </figure>
                    </td>
                    <td> 
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>	
                            <option>3</option>	
                            <option>4</option>	
                        </select> 
                    </td>
                    <td> 
                        <div className="price-wrap"> 
                            <var className="price">{price}</var> 
                            <small className="text-muted"> {actualPrice} </small> 
                        </div>
                    </td>
                    <td className="text-right"> 
                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                        <a href="" className="btn btn-light"> Remove</a>
                    </td>
                </tr>
            </tbody>
    )
}
