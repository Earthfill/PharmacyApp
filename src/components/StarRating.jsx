import React from 'react'
import { useState } from 'react';

// for the make a rating
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hoverFill, setHoverFill] = useState(null);

    return (
      <div className='star--rating'>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={index}
              className={ratingValue <= (rating &&hoverFill) ? 'on' : 'off'}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}
            >
              <span className='star'>&#9733;</span>
            </button>
          );
        })}
      </div>
  )
}

export default StarRating