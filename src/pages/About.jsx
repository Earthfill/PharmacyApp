import React from 'react'
import StarRating from '../components/StarRating'
import { useState, useEffect } from 'react'
import Error from './Error'
import { Link,  useParams } from 'react-router-dom';
import ReactLoading from "react-loading";

const About = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const {uniqueGuid} = params;
  
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState("");

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
          }, 900);
      })
      .catch(() => {
          setError(true);
          setIsLoading(true);
      })
  }, [uniqueGuid])

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  
  //   fetch(`${BASE_URL}/Review/AddReview`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
     
  //     body: JSON.stringify({
  //       "body": reviews,
  //       "rating": rating,
  //       "pharmacyId": item.id,
  //     })
  //   })
  //   .then(res => res.json())
   
  //   .catch(error => console.error(error.message));
  //   setReviews('');
  //   setRating(0.0);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
		fetch(`${BASE_URL}/Review/AddReview`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		 
			body: JSON.stringify({
				"body": reviews,
				"rating": rating,
				"pharmacyId": item.id
			})
		})
		.then(res => res.json())
		
		.catch(error => console.error(error.message));
		// onReviewSubmit(res.data);
    setReviews("");
		};

  const handleRate = (value) => {
    setRating(value);
  };

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  if (!isLoading) {
    return (
      <div className='loading'>
        <ReactLoading type="bubbles"
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
        <div className='about'>
        <img src={item.logo} alt="" className="about--image" />
        <div className='about--info'>
         <h4>{item.name}</h4>
         <p>  
         </p>
         <p>REG NO: {item.regNumber}</p>
        </div>
        <hr />
        <div className='about--about'>
          <h3>About</h3>
          <p className='about--text--info'>{item.about}</p>
        </div>
        <hr />
        <div className='about--details'>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p className='address'>{item.location}</p>
          </div>
          <div>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p className='telephone'>{item.phoneNumber}</p>
          </div>
          <div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p className='mail'>{item.email}</p>
          </div>
          <div>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p className='availability'>{item.workHours}</p>
          </div>
        </div>
        <hr />
        <div className='about--reviews'>
          <h3>Ratings and reviews</h3>
          <p className='about--text--info'>
            {/* {!item && "No reviews yet!"} */}
            {item.reviews.length < 1 ? "No reviews yet!": item.reviews[0].body}
          </p>
        </div>
        {item.reviews.length < 1 ? <p></p> :
        <p className='about--anonymous'><em>--Anonymous</em></p>
        }
        {item.reviews.length < 1 ? <p></p> :
        <p className='about--more'>
          <Link to={`/about/review/${uniqueGuid}`}><em>See All Reviews</em></Link>
        </p>
        }
        <hr />
        <p className='about--ratings'><strong><em>Rate this Pharmacy</em></strong></p>
        <div className='about--rating'>
          <StarRating onRate={handleRate}/>
          <p className='about--rating--bad'>Bad</p>
          <p className='about--rating--great'>Great</p>
        </div>
        {/* <p className='about--more'>
          <a href={`./pages/report/${id}`}><em>Report this page?</em></a>
        </p> */}
        <p className="about--more">
          <Link to={`/about/ratings/${uniqueGuid}`}><em>See All Ratings</em></Link>
        </p>
        <hr />
        <p className="about--reviews--post"><strong><em>Post a Review</em></strong></p>
        <div className='about--fill'>
          <form onSubmit={handleSubmit}>
            <textarea name="" id="" cols="1" rows="4" 
              typeof='text' 
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
            />
            <button type="submit" className='about--button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default About