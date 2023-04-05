import React from 'react'
import Arrow from '../components/Arrow'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactLoading from "react-loading";


const Ratings = () => {
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
          setItem(result.data);
          setIsLoading(false);
          setTimeout(() => {
            setItem(result.data);
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
  else if (item === null) {
    return <div><Error /></div>;
  } else {
  return (
    <div className='ratings'>
      <Arrow />
        <div>
          <h3 className='ratings--main'>Ratings</h3>
          <div className='ratings--info'>All the ratings of the Users who have used a registered pharmacy.</div>
        </div>
        <div className='ratings--view--general'>
          <div className='ratings--view'>
            <h1 className='ratings--rating'>{item.reviews[0].rating}</h1>
            <div className='ratings--star'>
              <div>
                <Rating />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="side">
              <div>5</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-5"></div>
              </div>
            </div>
            <div className="side right">
              <div>150</div>
            </div>
            <div className="side">
              <div>4</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-4"></div>
              </div>
            </div>
            <div className="side right">
              <div>63</div>
            </div>
            <div className="side">
              <div>3</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-3"></div>
              </div>
            </div>
            <div className="side right">
              <div>15</div>
            </div>
            <div className="side">
              <div>2</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-2"></div>
              </div>
            </div>
            <div className="side right">
              <div>6</div>
            </div>
            <div className="side">
              <div>1</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-1"></div>
              </div>
            </div>
            <div className="side right">
              <div>20</div>
            </div>
          </div>
        </div>   
    </div>
    )
  }
}

export default Ratings