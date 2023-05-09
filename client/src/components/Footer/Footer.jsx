import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Men</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos
            delectus laborum culpa saepe tempore iusto, ex suscipit quae vitae
            animi voluptatibus illum reiciendis? Delectus saepe voluptas
            recusandae sunt earum.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            harum vel unde odit cum perferendis? Maxime qui ut, necessitatibus
            culpa itaque sapiente temporibus eaque officiis tenetur nam ad,
            autem nisi?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Clothn</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img
            src={process.env.PUBLIC_URL + "/images/payments.png"}
            alt="payment options"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
