import React from 'react';
import star from "../../../../images/star/star-solid.svg";

function Rating({rating, numberReviews}) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(star);
  }

  return (
    <div className="rating">
      {stars.map((item) => <img key={Math.random() + Math.random()} width="10px" src={item} alt="like"/>)}
      <a href="#">{numberReviews} отзывов</a>
    </div>
  );
}

export default Rating;
