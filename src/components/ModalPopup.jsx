import React from 'react'
import { useState, useEffect } from 'react';
import useReportTags from '../hooks/useReportTags';

const ModalPopup = ({ handleSubmit, setSelectedTags, selectedTags ,setImage, setReports, reports, item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTextarea, setShowTextarea] = useState(false)
  const [showImagearea, setShowImagearea] = useState(false)
  const [showThings, setShowThings] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleCheckboxChange = (tagId) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tagId)) {
        return prevSelectedTags.filter((id) => id !== tagId);
      } else {
        return [...prevSelectedTags, tagId];
      }
    })
  };
  
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('body', reports);
    formData.append('pharmacyId', item.id);
    formData.append('reportTagId', JSON.stringify(selectedTags));
    formData.append('image', e.target.image.files[0]);

    handleSubmit(formData);
    setReports(e.target.reports.value)
  };

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  const { reportTags, error: tagsError } = useReportTags(BASE_URL)

  const handleOtherClick = () => {
    setShowTextarea(!showTextarea)
  }

  const handleAnotherClick = () => {
    setShowImagearea(!showImagearea)
  }

  const handleThings = () => {
    setShowThings(!showThings)
  }

  return (
    <div className="modal">
      {!isOpen && <button onClick={openModal} className='modal--report'>Report this pharmacy</button>}
      {isOpen && (
        <div className='modal--form'>
          <div className='modal--content'>
          <button className='modal--close--button' onClick={closeModal}>&#10060;</button>
          <button className='modal--form--header' onClick={handleThings}>SELECT RELEVANT REPORTS</button>
            <form onSubmit={handleFormSubmit} className='modal--form--handler'>
              {showThings && reportTags.map((tag) => (
                <div key={tag.id}>
                  <input
                    type="checkbox"
                    name={`reportTag${tag.id}`}
                    value={tag.id}
                    className="reportTagId"
                    onChange={() => handleCheckboxChange(tag.id)}
                  />
                  <label htmlFor={`reportTag${tag.id}`}>{tag.name}</label>
                </div>
              ))}
              <div>
                <div className='modal--textarea'>
                  <button onClick={handleOtherClick} className='modal--textarea--others'>Additional Information</button>
                  {showTextarea && <textarea name="reports" cols='1' rows='2' placeholder='Post a report here (optional)'/>}
                </div>
                <div className='modal--image'>
                  <button className='modal--textarea--others' onClick={handleAnotherClick}>Upload relevant image:</button>
                  {showImagearea && <input type="file" name="image" onChange={handleFileChange} className='modal--file--upload'/>}
                </div>
                <button type="submit" className='modal--submit' onClick={(e) => handleSubmit(e, selectedTags)}>
                  POST
                </button>
              </div>
            </form>
            </div>
          </div>
        )}
    </div>
  )
}

export default ModalPopup