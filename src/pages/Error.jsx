import React from 'react'
import { useState, useEffect } from 'react';
// import CameraUpload from '../components/CameraUpload';

const Error = () => {
  // const [item, setItem] = useState([]);
  const [error, setError] = useState(false);

  // const [reports, setReports] = useState("");

  // const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  // useEffect(() => {
  //   fetch(`${BASE_URL}/Report/GetAllReports`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error;
  //       }
  //       return res.json();
  //     })
  //     .then(
  //       (result) => {
  //         setItem(result.data);
  //     })
  //     .catch(() => {
  //         setError(true);
  //     })
  // }, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
	// 	fetch(`${BASE_URL}/Report/AddReport`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
		 
	// 		body: JSON.stringify({
	// 			"body": reports
	// 		})
	// 	})
	// 	.then(res => res.json())
		
	// 	.catch(error => console.error(error.message));
	// 	setReports("");
  // };
  return (
    <div>
      <div className='error'>
        <div>
          <img src="/assets/error.png" alt="" className='error--image'/>
        </div>
        <div className="error--input">
          <strong className='error--fill'><em>Oops...</em></strong>
          <p className='error--fill'>Pharmacy not registered</p>
        {/* <div>
          <form onSubmit={handleSubmit}>
            <textarea name="" id="" cols="1" rows="4" 
              typeof='text' 
              value={reports}
              onChange={(e) => setReports(e.target.value)}
            />
            <button type="submit" className='about--button'>Submit</button>
          </form>
          <p className='error--upload'>Upload Image:</p>
        </div>
        <div>
          <CameraUpload className='error--fill'/>
          <p className='error--fill'>Input address</p>
          <form onSubmit={handleSubmit}>
            <textarea name="" id="" cols="1" rows="4" 
              typeof='text' 
              value={reports}
              onChange={(e) => setReports(e.target.value)}
            />
            <button type="submit" className='about--button'>Submit</button>
          </form>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Error