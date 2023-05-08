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

  const [visibleItems, setVisibleItems] = useState(3);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  
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

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      if (visibleItems < item.length) {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
      } else {
        setHasMoreItems(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  else if (item === null) {
    return <div><Error /></div>;
  } else {
  return (
    <div>
      <Arrow />
      <div className='review'>
        <h3 className='review--main'>Ratings and reviews</h3>
          {item.slice(0, visibleItems).map(element => (
            <div className='review--card' key={element.id}>
              <div className='review--star'><RatedStar rating={element.rating}/></div>
              <p className='review--text'>{element.body}</p>
                <div className='review--anonymous'>--Anonymous</div>
                <div className='review--time'>{element.timeStamp}</div>
            </div>
          ))}
          {visibleItems < item.length && (
            <button onClick={handleScroll} className='report--more'>Show More Reports</button>
          )}
      </div>
    </div>
    )
  }
}

export default Review