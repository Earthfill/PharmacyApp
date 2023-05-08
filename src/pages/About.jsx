import React from 'react'
import StarRating from '../components/StarRating'
import { useState, useEffect } from 'react'
import Error from './Error'
import { Link,  useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import RatedStar from '../components/RatedStar';
import Popup from '../components/Popup';
import PhoneNumber from '../components/PhoneNumber';
import EmailAddress from '../components/EmailAddress';
import Address from '../components/Address';

const About = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const {uniqueGuid} = params;
  
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState("");

  const [showPopup, setShowPopup] = useState(false);

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
  }, [uniqueGuid, reviews])

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
    setRating();
		};

  const handleRate = (value) => {
    setRating(value);
    setShowPopup(true);
  };

  // const handleReviewSubmit = (review) => {
  //   setReviews([...reviews, reviews]);
  // };

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
         <span className='about--top--rating'>{item.rating !== NaN ? '0.0' : item.rating}</span>
         <span className='about--top--rating'><RatedStar rating={item.rating}/></span>
         <p>CERT NO: {item.regNumber}</p>
        </div>
        <hr />
        <div className='about--about'>
          <h3>Resident Pharmacist</h3>
        </div>
          <div className='about--pharmacist'>
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <div className="pharmacist">{item.pharmacist.firstName} {item.pharmacist.middleName} {item.pharmacist.lastName}</div>
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
            <div className='address'><Address address={item.location}/></div>
          </div>
          <div>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <div className='telephone'><PhoneNumber number={item.phoneNumber}/></div>
          </div>
          <div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <div className='mail'><EmailAddress email={item.email} /></div>
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
            {item.reviews.length < 1 ? "No reviews yet!": item.reviews[0].body}
          </p>
        </div>
        {item.reviews.length < 1 ? <p></p> :
        <p className='about--anonymous'><em>--Anonymous</em></p>
        }
        {item.reviews.length < 1 ? <p></p> :
        <p className='about--more'>
          <Link to={`/about/review/${uniqueGuid}`}>See All Reviews</Link>
        </p>
        }
        <hr />
        <p className='about--ratings'><strong>Rate this Pharmacy</strong></p>
        <div className='about--rating'>
          <StarRating onRate={handleRate}/>
          {!showPopup && <p className='about--rating--bad'>Bad</p>}
          {!showPopup && <p className='about--rating--great'>Great</p>}
          {showPopup && <Popup />}
          {showPopup && 
          <div className='about--fill'>
            <form onSubmit={handleSubmit}>
              <textarea name="" id="" cols="1" rows="2" 
                typeof='text' 
                placeholder='Post a review'
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
              />
              <button type="submit" className='about--button'>SUBMIT</button>
            </form>
          </div>
          }
        </div>
        <p className='about--more'>
          <Link to={`/about/report/${uniqueGuid}`}>Report this pharmacy</Link>
        </p>
      </div>
    </div>
    )
  }
}

export default About