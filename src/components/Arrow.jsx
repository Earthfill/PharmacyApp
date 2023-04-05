import React from 'react'
import { useNavigate } from 'react-router-dom';

const Arrow = () => {
  const navigate = useNavigate();

  return (
    <div className="arrow">
        <button onClick={() => navigate(-1)} className='arrow--back'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default Arrow