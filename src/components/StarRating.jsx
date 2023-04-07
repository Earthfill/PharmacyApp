import React from 'react'
import { useState } from 'react';
import Popup from './Popup';

// for the make a rating
const StarRating = ({ onRate }) => {
    const [rating, setRating] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleRate = (value) => {
      setRating(value);
      onRate(value);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 10000);
    }

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
        {showPopup && <Popup />}
      </div>
  )
}

export default StarRating