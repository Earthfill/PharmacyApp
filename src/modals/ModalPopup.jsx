import { useState } from 'react';
import useReportTags from '../hooks/useReportTags';
import useField from '../hooks/useField';
import { Chip } from '@mui/material';

const ModalPopup = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTextarea, setShowTextarea] = useState(false)
  const [showImagearea, setShowImagearea] = useState(false)
  const [showThings, setShowThings] = useState(false)

  const [selectedTags, setSelectedTags] = useState([])
  const [reports, setReports] = useState("")
  const [image, setImage] = useState(null);

  const name = useField("")
  const phone = useField("")

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleCheckboxChange = (tagId) => {
    console.log(tagId);
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tagId)) {
        return prevSelectedTags.filter((id) => id !== tagId)
      } else {
        return [...prevSelectedTags, tagId]
      }
    })
  };
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  const { reportTags, error: tagsError } = useReportTags(BASE_URL)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        const formData = new FormData();
        formData.append('body', reports);
        formData.append('longitude', longitude);
        formData.append('latitude', latitude);
        formData.append('pharmacyId', item.id);
        formData.append('phoneNumber', phone);
        formData.append('reportTagId', JSON.stringify(selectedTags));
        formData.append('image', image);
  
        fetch(`${BASE_URL}/Report/AddReport`, {
          method: 'POST',
          body: formData
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to create report');
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  
    setReports('');
  };

  const handleOtherClick = (event) => {
    event.preventDefault();
    setShowTextarea(!showTextarea)
  }

  const handleAnotherClick = (event) => {
    event.preventDefault();
    setShowImagearea(!showImagearea)
  }

  const handleThings = (event) => {
    event.preventDefault()
    setShowThings(!showThings)
  }

  return (
    <div className="modal">
      {!isOpen && <button onClick={openModal} className='modal--report'>Report</button>}
      {isOpen && (
        <div className='modal--modal'>
        <div className='modal--form'>
          <div className='modal--content'>
          <button className='modal--close--button' onClick={closeModal}>&#10060;</button>
            <form className='modal--form--handler'>
              <div className='modal--textarea'>
                <button onClick={handleOtherClick} className='modal--textarea--others'>MAKE A REPORT</button>
                {showTextarea && <div className='modal--input'>Name:
                    <input 
                      name='name'
                      placeholder='Your Name'
                      required
                      value={name.value}
                      onChange={name.handleChange}
                    />
                  </div>}
                {showTextarea && <div className='modal--input'> Phone Number
                    <input 
                      type='tel'
                      name='phone'
                      placeholder='Phone Number'
                      required
                      value={phone.value}
                      onChange={phone.handleChange}
                    />
                  </div>}
                {showTextarea && <div className='modal--input'> Report 
                  <textarea name="reports" cols='1' rows='2' 
                    placeholder='Post a report here (optional)'
                    value={reports}
                    onChange={(e) => setReports(e.target.value)}
                  />
                </div>}
              </div>
              <button className='modal--form--header' onClick={handleThings}>Select Report Tag</button>
              <div className='modal--chips'>
              {showThings && reportTags.map((tag) => (
                <Chip 
                  key={tag.id}
                  label={tag.name}
                  clickable
                  onClick={() => handleCheckboxChange(tag.id)}
                  className='reportedTagId'
                  style={selectedTags.includes(tag.id) ? { backgroundColor: '#45b6fe', color: '#ffffff' } : {}}
                /> 
              ))}
              </div>
              <div>
                <div className='modal--image'>
                  <button className='modal--textarea--others' onClick={handleAnotherClick}>Upload relevant image:</button>
                  {showImagearea && <input type="file" name="image" onChange={handleImageChange} className='modal--file--upload'/>}
                </div>
                <button type="submit" className='modal--submit' onClick={(e) => handleFormSubmit(e)}>
                  POST
                </button>
              </div>
            </form>
            </div>
          </div>
          </div>
        )}
    </div>
  )
}
we
export default ModalPopup