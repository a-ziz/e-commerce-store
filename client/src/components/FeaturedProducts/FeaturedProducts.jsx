import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          blanditiis sapiente incidunt veniam eum neque iste saepe impedit
          adipisci libero sint pariatur sequi, ea necessitatibus, fugit
          recusandae quod vero amet!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
