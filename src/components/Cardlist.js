import React,{useState} from 'react';
import Card from './Card';
import Banner from './Banner';
import Navbar from './Navbar';
import * as datas from './Schema.json';

export default function Cardlist() {
    const [products] = useState(datas.default.data);


    return(
        <>
            <Navbar/>
            <Banner/>
            <section className="section-name  padding-y-sm">
                <div className="container">
                <header className="section-heading">
                    <a href="#" className="btn btn-outline-primary float-right">See all</a>
                    <h3 className="section-title">Popular products</h3>
                </header>
                    <div className="row" >
                    {
                        products.map((product) => {
                            const percentage = (product.rating*100)/5 + '%';
                            return <Card key={product.id} 
                                        product={product}
                                        ratingPercentage={percentage}
                                    />
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
    

}
