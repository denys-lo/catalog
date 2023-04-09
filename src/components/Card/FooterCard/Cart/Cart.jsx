import React, {useState} from 'react';
import activeCart from "../../../../images/cart/cart-plus-solid.svg";
import defaultCart from "../../../../images/cart/cart-shopping-solid.svg";

function Cart({isCart}) {
  const [cart, setCart] = useState(isCart);

  return <><img onClick={() => setCart(!cart)} className="cart" src={cart ? activeCart : defaultCart} alt="cart"/></>;
}

export default Cart;
