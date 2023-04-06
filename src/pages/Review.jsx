import React from 'react'
import Arrow from '../components/Arrow'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import RatedStar from '../components/RatedStar';

const Review = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const {uniqueGuid} = params;
  
  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    fetch(`${BASE_URL}/Pharmacy/verify/${uniqueGuid}`)
      .then(res => {
        if (!res.ok) {
          throw new Error;
        }
        return res.json();
      })
      .then(
        (result) => {
          setItem(result.data.reviews);
          setIsLoading(false);
          setTimeout(() => {
            setItem(result.data.reviews);
            setIsLoading(true);
          }, 900)
      })
      .catch(() => {
          setError(true);
          setIsLoading(true);
        })
  }, [uniqueGuid])

  if (!isLoading) {
    return (
      <div className='loading'>
        <ReactLoading 
          type="bubbles"
          color="#45B6FE" 
          height={400} 
          width={100}
        />
      </div>
    )
  }
  else {
  return (
    <div>
      <Arrow />
      <div className='review'>
        <h3 className='review--main'>Ratings and reviews</h3>
          {item.map((element, index) => (
            <div className='review--card' key={index}>
              <p className='review--star'><RatedStar rating={element.rating}/></p>
              <p>{element.body}</p>
                <span className='review--anonymous'>--Anonymous</span>
                <span className='review--time'>5 hours ago</span>
            </div>
          ))}  
      </div>
    </div>
    )
  }
}

export default Review