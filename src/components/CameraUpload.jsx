import React from 'react'
import { useRef, useState } from 'react'

const CameraUpload = () => {
	const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

	const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;
	const [file, setFile] = useState();
  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  )
}

export default CameraUpload