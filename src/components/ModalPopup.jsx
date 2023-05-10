import React from 'react'
import { useState, useEffect } from 'react';
import useReportTags from '../hooks/useReportTags';

const ModalPopup = ({ handleSubmit, setSelectedTags, selectedTags ,setImage, setReports, reports, item }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="modal">
      {!isOpen && <button onClick={openModal} className='modal--report'>Report this pharmacy</button>}
      {isOpen && (
        <div className='modal--form'>
          <div className='modal--form--header'>Select relevant reports</div>
            <div className="modal--close">
                <button onClick={closeModal}></button>
            </div>
          <form onSubmit={handleFormSubmit} className='modal--form--handler'>
            {reportTags.map((tag) => (
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
                <p>Others</p>
                <label htmlFor="reports">Additional Information:</label>
                <textarea name="reports" id="reports" />
              </div>
              <div className='modal--image'>
                <label htmlFor="image">Upload relevant images:</label>
                <input type="file" name="image" onChange={handleFileChange} />
              </div>
              <input 
                type="submit" 
                value="Submit" 
                className='modal--submit' 
                onClick={(e) => handleSubmit(e, selectedTags)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ModalPopup