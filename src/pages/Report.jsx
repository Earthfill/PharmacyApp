import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import axios from 'axios';
import Arrow from '../components/Arrow'

const Report = () => {
  const [item, setItem] = useState()
  const [ritem, setRItem] = useState(null)
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const params = useParams();
  const {id} = params;

  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${BASE_URL}/Report/paged?PageNumber=${currentPage}&PharmacyId=${id}`)
        .then(response => {
          const result = response.data;
          setItem(result.data);
          setIsLoading(false);
          setTotalPages(result.totalPages);
  
          setTimeout(() => {
            setItem(result.data);
            setIsLoading(true);
          }, 900);
        })
        .catch(error => {
          setError(true);
          setIsLoading(true);
        });
    };
  
    fetchData();
    
 
  }, [id, currentPage]);
  console.log(item);
  const goToPage = (page) => {
    setCurrentPage(page);
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
  else {
  return (
    <div>
      <Arrow />

      <div className='report'>
        <div>
          <h3 className='report--main'>Reports</h3>
            {item.map((element) => (
            <div className="report--card" key={element.id}>
              <div className="review--text">{element.body}</div>
              <span className="review--anonymous">--Anonymous</span>
              <span className="review--time">{element.timeStamp}</span>
            </div>
            ))}

          <div className='review--paged'>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Report