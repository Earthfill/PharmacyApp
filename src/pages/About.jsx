import React from 'react'
import StarRating from '../components/StarRating'
import { useState, useEffect } from 'react'
import Error from './Error'
import { Link,  useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import RatedStar from '../components/RatedStar';
import Popups from '../components/Popups';
import PhoneNumber from '../components/PhoneNumber';
import EmailAddress from '../components/EmailAddress';
import Address from '../components/Address';
import ModalPharmacist from '../components/ModalPharmacist';
import ModalPopup from '../components/ModalPopup';

const About = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const {uniqueGuid} = params;
  
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

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

  const handleSubmit = (e) => {
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
    setIsPosted(true)
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
          <div className="about--profile">
            <img src={item.logo} alt="" className="about--image" />
            <div className="verification--icon">
              {!item.licenseExpired && (
                <span className="stamp--licensed">LICENSED</span>
              )}
              {item.licenseExpired && (
                <span className="stamp--unlicensed">UNLICENSED</span>
              )}
            </div>
          </div>
        <div className='about--info'>
         <h4>{item.name}</h4>
         <span className='about--top--rating'>{item.rating > 1.0 ? item.rating.toFixed(1) : '0.0'}</span>
         <span className='about--top--rating'><RatedStar rating={item.rating}/></span>
         <p>CERT NO: {item.regNumber}</p>
        </div>
        <hr />
        <div className='about--about'>
          <h3>Resident Pharmacist</h3>
        </div>
          <ModalPharmacist item={item}/>
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
        <div className='about--text--info'>
        {item.reviews.length < 1 ? <p></p> : item.reviews[0].body === "" ? "No reviews yet!":
        <p className='about--anonymous'><em>--Anonymous</em></p>
        }
        </div>
        {item.reviews.length < 1 ? <p></p> :
        <div className='about--more'>
          {item.reviews[0].body === "" ? <p></p> : <Link to={`/about/review/${uniqueGuid}`}>See All Reviews</Link>}
        </div>
        }
        <hr />
        <div className='about--ratings'>
          <p className='about--title'><strong>Rate & Report</strong></p>
          {showPopup && <button type="submit" className='about--button' onClick={handleSubmit}>POST</button>}
        </div>
        <div className='about--rating'>
          <StarRating onRate={handleRate} />
          {!showPopup && <p className='about--rating--bad'>Bad</p>}
          {!showPopup && <p className='about--rating--great'>Great</p>}
          {showPopup && <Popups />}
          {showPopup && 
          <div className='about--fill'>
            <form>
              <textarea name="" id="" cols="1" rows="2" 
                typeof='text' 
                placeholder='Post a review (optional)'
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
              />
            </form>
          </div>
          }
          {isPosted && <p className='about--posting'>Thanks for posting!</p>}
        </div>
        <ModalPopup item={item} />
        <div className='about--more'>
          <Link to={`/about/report/${item.id}`}>View all reports</Link>
        </div>
      </div>
    </div>
    )
  }
}

export default About