// import axios from 'axios'
import React from 'react'
import Arrow from '../components/Arrow'
import StarRating from '../components/StarRating'
import { useState, useEffect } from 'react'
import Error from './Error'

const About = () => {
  // function Rating() {
  //   const ratings = props.rating;
  //   const fullStars = Math.floor(ratings);
  //   const halfStars = Math.ceil(ratings - fullStars);
  //   const emptyStars = 5.0 - fullStars - halfStars;
  //   console.log(halfStars);
    
  //   return (
  //     <span>
  //       {props.rating}
  //       {[...Array(fullStars)].map((star, index) => (
  //         <i key={index} className="fa fa-star checked"></i>
  //       ))}
  //       {[...Array(halfStars)].map((star, index) => (
  //         <i key={index} className="fa-regular fa-star-half-stroke"></i>
  //       ))}
  //       {[...Array(emptyStars)].map((star, index) => (
  //         <i key={index} className="fa fa-star unchecked"></i>
  //       ))}
  //     </span>
  //   );
  // }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://artisanbe.herokuapp.com/api/v1/pharmacy')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div><Error /></div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <Arrow />
          <div className='about'>
            <img src="./assets/Logo.png" alt="" className="about--image" />
            <div className='about--info'>
              <p></p>
              <p>

              </p>
              <p></p>
            </div>
            <hr />
            <div className='about--about'>
              <h3>About</h3>
              <p className='about--text--info'></p>
            </div>
            <hr />
            <div className='about--details'>
              <div>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p className='address'></p>
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p className='telephone'></p>
              </div>
              <div>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p className='mail'></p>
              </div>
              <div>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <p className='availability'>8am - 6pm; Monday - Saturday</p>
              </div>
            </div>
            <hr />
            <div className='about--reviews'>
              <h3>Reviews</h3>
              <p className='about--text--info'></p>
            </div>
            <p className='about--anonymous'><em>--Anonymous</em></p>
            <p className='about--more'>
              <a href="./pages/Review" ><em>See All Reviews</em></a>
            </p>
            <hr />
            <p className='about--ratings'><strong><em>Rate this Pharmacy</em></strong></p>
            <div className='about--rating'>
              <StarRating />
              <p className='about--rating--bad'>Bad</p>
              <p className='about--rating--great'>Great</p>
            </div>
            <p className='about--more'>
              <a href='./pages/Report'><em>Report this page?</em></a>
            </p>
            <p className="about--more">
              <a href='./pages/ratings'><em>See all Ratings</em></a>
            </p>
            <hr />
            <p className="about--reviews--post"><strong><em>Post a Review</em></strong></p>
            <div className='about--fill'>
              <textarea name="" id="" cols="1" rows="4"></textarea>
              <button className='about--button'>SUBMIT</button>
            </div>
          </div>
      </div>
    )
  }
}

export default About