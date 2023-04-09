import React from 'react';

function Status({status}) {
  return status === "top" ? <div className="status status__top">Топ продаж</div> : status === "promotion" ? <div className="status status__promotion">Акция</div> : <div className="status status__another"></div>;
}

export default Status;
