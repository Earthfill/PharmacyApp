import React from 'react'
import { useState } from 'react';

// for the make a rating
const StarRating = ({ onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRate = (value) => {
      setRating(value);
      onRate(value);
    };

    return (
      <div className='star--rating'>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleRate(value)}
            className={value <= rating ? "on" : "off"}
          >
            &#9733;
          </span>
        ))}
      </div>
  )
}

export default StarRating