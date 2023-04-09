import React from 'react';

function Price({price, oldPrice}) {
  return (
    <div>
      {(oldPrice !== 0) && <div className="old__price">{oldPrice} ₴</div>}
      <div className={oldPrice !== 0 ? "salePrice" : "price"}>{price} ₴</div>
    </div>
  );
}

export default Price;
