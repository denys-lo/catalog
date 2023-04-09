import React, {useState} from 'react';

function ImgCard({name, firstImg, secondImg}) {
  const [image, setImage] = useState(firstImg);

  return (
    <div className="card__images"
         onMouseEnter={() => setImage(secondImg)}
         onMouseLeave={() => setImage(firstImg)}>
      <img className="images__item" src={image} alt={name}/>
    </div>);
}

export default ImgCard;
