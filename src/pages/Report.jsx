import React from 'react'
import Arrow from '../components/Arrow'
import ReactLoading from "react-loading";

import { useState, useEffect } from 'react'
// import ReportUserPopup from '../components/ReportUserPopup';

const Report = () => {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [reports, setReports] = useState("")

  const [expanded, setExpanded] = useState(false)
  const [visibleItems, setVisibleItems] = useState(3)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    fetch(`${BASE_URL}/Report/GetAllReports`)
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
      })
  }, [])

  const handleSubmit = () => {
    e.preventDefault();
		fetch(`${BASE_URL}/Report/AddReport`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		 
			body: JSON.stringify({
				"body": reports
			})
		})
		.then(res => res.json())
		
		.catch(error => console.error(error.message))
		setReports("")
  }

  const handleClick = () => {
    event.preventDefault();
    setExpanded(!expanded);
    if (!expanded) {
      setExpanded(true);
    }
  }

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
  else {
  return (
    <div>
      <Arrow />
      <div className='report'>
        <div>
          <h3 className='report--main'>Reports</h3>
          <form onSubmit={handleSubmit} className='report--form'>
            <textarea name="" id="" cols="1" rows="4" 
              typeof='text' 
              value={reports}
              onChange={(e) => setReports(e.target.value)}
            />
            <button type="submit" className='about--button'>SUBMIT</button>
          </form>
        </div>
        <button href='' onClick={handleClick} className='report--more'>{!expanded && <p>See all reports</p>}</button>         
          {expanded && 
          item.slice(0, visibleItems).map(element => (
            <div className="report--card" key={element.id}>
              <div className="review--text">{element.body}</div>
                <span className="review--anonymous">--Anonymous</span>
                <span className="review--time">{element.timeStamp}</span>
            </div>
          ))}
          {expanded && hasMoreItems && (
            <button onClick={handleScroll} className='report--more'>Show More Reports</button>
          )}
      </div>
    </div>
    )
  }
}

export default Report