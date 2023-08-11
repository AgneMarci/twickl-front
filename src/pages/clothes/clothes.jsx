import React from 'react'
import {PRODUCTS} from "../../products";
import { Product } from "../../pages/clothes/product";
import "./clothes.css"; 

const Clothes = () => {
    return (
        <div className="clothes">
            <div className="products">
                {PRODUCTS.map((product)=> (
                     <Product key={product.id} data={product} />
                ))}
            </div>    
         </div>
        );
    };

    export default Clothes;