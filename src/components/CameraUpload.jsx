import React from 'react'
import { useRef, useState } from 'react'

const CameraUpload = () => {
	const videoRef = useRef(null);
  const canvasRef = useRef(null);

	const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

	const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

	const handleCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error(`Error accessing camera: ${error}`);
        });
    } else {
      console.error('getUserMedia is not supported by this browser.');
    }
  };

	const handleUpload = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageBlob = canvasRef.current.toBlob((blob) => {
      fetch(`${BASE_URL}/Report/GetAllReports`)
      .then(res => {
        if (!res.ok) {
          throw new Error;
        }
        return res.json();
      })
      .then(
        (result) => {
          setItems(result.data);
      })
      .catch(() => {
          setError(true);
      })
    }, 'image/jpeg', 0.8);
  };
  return (
    <div>
			<video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleCapture}>Capture Image</button>
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  )
}

export default CameraUpload