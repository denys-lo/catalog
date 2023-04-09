import React from 'react';
import Price from "../BodyCard/Price/Price";
import Cart from "./Cart/Cart";
import statusReady from '../../../images/status/car-side-solid.svg'
import statusNotReady from '../../../images/status/circle-pause-regular.svg'

function FooterCard(props) {
  return (
    <>
      <div className="card__footer">
        <Price price={props.price} oldPrice={props.oldPrice}/>
        <Cart isCart={props.isCart}/>
      </div>
      {props.readyToSend ? <div className="status__send status__send_ready">Готов к отправке<img src={statusReady} alt="ready"/></div> : <div className="status__send status__send_not-ready">Отправка через 3-5 дней<img src={statusNotReady} alt="not ready"/></div>}
    </>
  );
}

export default FooterCard;
