import React from "react";
import Clothes from "../../pages/clothes/clothes";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";


export const Women = () =>{
    return (
        <div>
            <div className="women">
            </div>
            <Clothes />
            <Newsletter />
            <Footer />
        </div>
    );
}