import React from 'react'
import Arrow from '../components/Arrow'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import RatedStar from '../components/RatedStar';
import InfiniteScroll from "react-infinite-scroll-component";

const Review = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [visibleItems, setVisibleItems] = useState(3);

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

  const fetchMoreData = () => {
    if (visibleItems >= item.length) {
      return;
    }
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    }, 1500);
  };

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
        <InfiniteScroll
          dataLength={visibleItems}
          next={fetchMoreData}
          hasMore={visibleItems < item.length}
          loader={<h4>Loading...</h4>}
        >
          {item.slice(0, visibleItems).map(element => (
            element.body && (
            <div className='review--card' key={element.id}>
              <div className='review--star'><RatedStar rating={element.rating}/></div>
              <p className='review--text'>{element.body}</p>
                <div className='review--anonymous'>--Anonymous</div>
                <div className='review--time'>{element.timeStamp}</div>
            </div>
          )))}
        </InfiniteScroll>
      </div>
    </div>
    )
  }
}

export default Review