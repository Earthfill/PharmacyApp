import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import pharmacyService from '../services/pharmacy'
import Arrow from '../components/Arrow'
import RatedStar from '../components/RatedStar';

const Review = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const {uniqueGuid} = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await pharmacyService.getByGuid(uniqueGuid)
        setItem(prevItem => [...prevItem, ...result.data.reviews])
        setIsLoading(false)

        setTimeout(() => {
          setItem(result.data.reviews)
          setIsLoading(true)
        }, 900)
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    
    fetchData()
  }, [uniqueGuid]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >= document.documentElement.offsetHeight - 500 &&
        !isLoading
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

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
          {item
            .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp))
            .map(element => (
              element.body && (
              <div className='review--card' key={element.id}>
                <div className='review--star'><RatedStar rating={element.rating}/></div>
                <p className='review--text'>{element.body}</p>
                <div className='review--anonymous'>--Anonymous</div>
                <div className='review--time'>{element.timeStamp}</div>
              </div>
          )))}
          </div>
    </div>
    )
  }
}

export default Review