import React from "react";
import Clothes from "../../pages/clothes/clothes";
import Bar from "../../components/bar/bar";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";

export const Shop = () => {
  return (
    <div>
      <Bar />
      <div>
      <Clothes />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};