import React, {useState} from 'react';
import defaultLike from '../../../../images/like/heart-regular.svg'
import activeLike from '../../../../images/like/heart-solid.svg'

function LikeStatus({likeStatus}) {
  const [like, setLike] = useState(likeStatus);

  return <><img onClick={() => setLike(!like)} className="like" src={like ? activeLike : defaultLike} alt="like"/></>
}

export default LikeStatus;
