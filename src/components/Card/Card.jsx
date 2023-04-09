import React from 'react';
import TopCard from "./TopCard/TopCard";
import BodyCard from "./BodyCard/BodyCard";
import FooterCard from "./FooterCard/FooterCard";

function Card(data) {
  return data.laptops.map((laptop) => <div key={laptop.id} className="card">
    <TopCard status={laptop.status} likeStatus={laptop.isLike} likeCompare={laptop.isCompare}/>
    <BodyCard firstImg={laptop.mainImgSrc} secondImg={laptop.additionImgSrc} name={laptop.name} {...laptop}/>
    <FooterCard oldPrice={laptop.oldPrice} price={laptop.price} isCart={laptop.isCart} readyToSend={laptop.readyToSend}/>
  </div>);
}

export default Card;
