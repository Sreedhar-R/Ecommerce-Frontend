import React from 'react';
import Cart from './Cart';


const products = [
    {
        "id":1,
        "name":"Color Block Men Round Neck Black T-Shirt",
        "company":"Nike",
        "img":"https://rukminim1.flixcart.com/image/880/1056/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50",
        "price":"$21",
        "actualPrice":"$32",
        "rating":4,
        "size":'L',
        "color":"Black"
      },
    {
      "id":2,
      "name":" Color Block Men Round Neck Brown Jackey",
        "company":"Puma",
        "img":"https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg",
        "price":"$31",
        "actualPrice":"$39",
        "rating":4.5,
        "size":'XL',
        "color":"Brown"
    },
    {
      "id":3,
      "name":"Color Block Men Brown Hoddies",
      "company":"Lee-Cooper",
      "img":"https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg",
      "price":"$23",
      "actualPrice":"$32",
      "rating":3.5,
      "size":'L',
      "color":"Brown"
    }
]



 const Cartlist = () => {

    return (
        <div>
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Shopping cart</h2>
                </div>
            </section>
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">
                            <table className="table table-borderless table-shopping-cart">
                                <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" className="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                {
                                products.map((product,index,products) => {
                                    return <Cart key={products.id} 
                                                name={product.name} 
                                                size={product.size} 
                                                color={product.color} 
                                                price={product.price} 
                                                actualPrice={product.actualPrice}
                                                image={product.img}
                                                brand={product.company}/>
                                })
                                }
                            </table>

                            <div className="card-body border-top">
                                <a href="#" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </a>
                                <a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
                            </div>	
                            </div>
                            <div className="alert alert-success mt-3">
                                <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                            </div>

                        </main> 
                        <aside className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Have coupon?</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="" placeholder="Coupon code"/>
                                            <span className="input-group-append"> 
                                                <button className="btn btn-primary">Apply</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                        <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">USD 568</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right">USD 658</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                        <dt>Total:</dt>
                                        <dd className="text-right  h5"><strong>$1,650</strong></dd>
                                        </dl>
                                        <hr/>
                                        <p className="text-center mb-3">
                                            <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/misc/payments.png" height="26"/>
                                        </p>
                                        
                                </div>
                            </div>
                        </aside> 
                    </div>
                </div>
            </section>
            
        </div>
    )
}


export default Cartlist;