import React from "react";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import {PRODUCTS} from "../../products";
import { Product } from "../../pages/clothes/product";
import "../clothes/clothes.css"; 


export const Women = () =>{
    return (
        <div>
         <div className="clothes">
            <div className="products">
                {PRODUCTS.filter(product => product.gender === "women").map((product) => (
                     <Product key={product.id} data={product} />
                ))}
            </div>    
         </div>
            <Newsletter />
            <Footer />
        </div>
    );
}