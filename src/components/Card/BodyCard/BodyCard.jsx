import React from 'react';
import ImgCard from "./ImgCard/ImgCard";
import Rating from "./Rating/Rating";
import Price from "./Price/Price";

function BodyCard(props) {
  return (
    <div className="card__body">
      <ImgCard {...props}/>
      <a href="#">{props.name}</a>
      <Rating {...props}/>
    </div>
  );
}

export default BodyCard;
