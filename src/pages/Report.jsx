import React from 'react'
import Arrow from '../components/Arrow'
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react'
import ModalPopup from '../components/ModalPopup';
import useReportTags from '../hooks/useReportTags';
// import InfiniteScroll from "react-infinite-scroll-component";

const Report = () => {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const params = useParams();
  const {id} = params;

  const [reports, setReports] = useState("")

  const [selectedTags, setSelectedTags] = useState([]);

  const [expanded, setExpanded] = useState(false)
  const [visibleItems, setVisibleItems] = useState(3)

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    fetch(`${BASE_URL}/Report/${id}`)
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

  }, [id])

  const { reportTags, error: tagsError } = useReportTags(BASE_URL)

  const handleSubmit = (e, selectedTags) => {
    e.preventDefault()

    if (!navigator.geolocation) {
      console.error('Geolocation is not supported bys your browser')
      return
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords
        const postData = {
          body: reports,
          longitude: longitude,
          latitude: latitude,
          pharmacyId: item.id,
          reportTagId: selectedTags,
          images: []
        }

        fetch(`${BASE_URL}/Report/AddReport`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to create report')
          }
        })
        .catch(error => console.error(error.message))
      },
      (error) => {
        console.error(error)
      }
  )}

  const handleClick = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setExpanded(true);
    }
  }

  const fetchMoreData = () => {
    if (visibleItems >= item.length) {
      return;
    }
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    }, 1500);
  }

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
            <div className='report--page'>
              <ModalPopup handleSubmit={handleSubmit}/>
              {/* <p className='report--head'>Make a report</p>
              <form className='report--form'>
                <textarea name="" id="" cols="1" rows="2" 
                  typeof='text' 
                  placeholder='Post a report'
                  value={reports}
                  onChange={(e) => setReports(e.target.value)}
                />
                <button onClick={handleSubmit} type="submit" className='report--button'>POST</button>
              </form> */}
            </div>
        </div>
        {/* <InfiniteScroll
            dataLength={visibleItems}
            next={fetchMoreData}
            hasMore={visibleItems < item.length}
            // loader={<h4>Loading...</h4>}
          >          */}
        <div className="report--card">
          <div className="review--text">{item.body}</div>
            <span className="review--anonymous">--Anonymous</span>
            <span className="review--time">{item.timeStamp}</span>
        </div>
          {/* </InfiniteScroll> */}
      </div>
    </div>
    )
  }
}

export default Report