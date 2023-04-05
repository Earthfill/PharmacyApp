import React from 'react'

const RatedStar = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i} className={i <= rating ? 'filled' : 'empty'}>★</span>);
  }
  return (
    <div>{stars}</div>
  )
  // const starPercentage = (rating / 5) * 100;

  // // Round to the nearest 10 to get a whole or half star rating
  // const starRounded = `${Math.round(starPercentage / 10) * 10}%`;

  // return (
  //   <div className="star-rating">
  //     <div className="star-rating-front" style={{ width: starRounded }}>
  //       {/* Render the star icons */}
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //     </div>
  //     <div className="star-rating-back">
  //       {/* Render the greyed-out star icons */}
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //       <span className="fa fa-star"></span>
  //     </div>
  //   </div>
  // )
}

export default RatedStar