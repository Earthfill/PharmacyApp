import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import axios from 'axios';
import Arrow from '../components/Arrow'

const Report = () => {
  const [item, setItem] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const params = useParams();
  const {id} = params;

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}/Report/paged?PageNumber=${currentPage}&PharmacyId=${id}`);
        const result = response.data;
        setItem(prevItems => [...prevItems, ...result.data]);
        setIsLoading(false);
        setHasMore(result.totalPages > currentPage);

        setTimeout(() => {
            setItem(result.data);
            setIsLoading(true);
          }, 900);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [id, currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
        document.documentElement.offsetHeight - 500 &&
      !isLoading &&
      hasMore
    ) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]);

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
          {item.map((element) => (
            element.body && (
            <div className="report--card" key={element.id}>
              <div className="review--text">{element.body}</div>
              <span className="review--anonymous">--Anonymous</span>
              <span className="review--time">{element.timeStamp}</span>
            </div>
            )))}
        </div>
      </div>
    </div>
    )
  }
}

export default Report