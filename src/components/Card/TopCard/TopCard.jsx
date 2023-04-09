import React from 'react';
import Status from "./Status/Status";
import LikeStatus from "./LikeStatus/LikeStatus";
import LikeCompare from "./LikeCompare/LikeCompare";

function TopCard(data) {
  return (
    <div className="card__header">
      <Status status={data.status}/>
      <div className="card__statuses">
        <LikeStatus likeStatus={data.likeStatus}/>
        <LikeCompare likeCompare={data.isCompare}/>
      </div>
    </div>
  );
}

export default TopCard;
