import React, {useState} from 'react';
import defaultCompare from '../../../../images/compare/scale-balanced-solid.svg'
import activeCompare from '../../../../images/compare/scale-unbalanced-solid.svg'

function LikeCompare({compareStatus}) {
  const [compare, setCompare] = useState(compareStatus);

  return <><img onClick={() => setCompare(!compare)} className="compare" src={compare ? activeCompare : defaultCompare} alt="like"/></>
}

export default LikeCompare;
