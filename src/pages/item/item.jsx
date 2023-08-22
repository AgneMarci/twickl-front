import React from 'react';
import { useParams } from 'react-router-dom';
import './item.css';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ShopContext } from '../../context/shop-context';
import {PRODUCTS} from "../../products";

export const Item = () => {
    const { t } = useTranslation();
    const { productId } = useParams();
    const product = PRODUCTS.find(p => p.id === parseInt(productId, 10)); 

    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = (productId) => {
        addToCart(productId);
    };

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className='main'>
            <div className='wrapperItem'>
                <div className='imageItem'>
                    <img src={product.productImage} alt={product.productNameKey} />
                </div>
                <div className='informationItem'>
                    <h1>{t(product.productNameKey)}</h1>
                    <h2>{t(`€ ${product.price}`)}</h2>
                    <p>{t(product.description)}</p>
                    <div className='button'>
                        <button className="addToCartButton" onClick={() => handleAddToCart(product.id)}>
                            {t('ADD TO CART')}
                        </button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};
