import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RatedStar from './RatedStar';

const Rating = () => {
  // const ratings = props.rating;
  // const fullStars = Math.floor(ratings);
  // const halfStars = Math.ceil(ratings - fullStars);
  // const emptyStars = 5.0 - fullStars - halfStars;
  // console.log(halfStars);
  const [item, setItem] = useState(0);

  const params = useParams();
  const {uniqueGuid} = params;
  
  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    fetch(`${BASE_URL}/Pharmacy/verify/${uniqueGuid}`)
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result.data);
      })
  }, [uniqueGuid])
  return (
    <div>
      <RatedStar rating={item.rating}/>
    </div>
  )
}

export default Rating