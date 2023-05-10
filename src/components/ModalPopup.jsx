import React from 'react'
import { useState, useEffect } from 'react';
import useReportTags from '../hooks/useReportTags';

const ModalPopup = ({ handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTags, setSelectedTags] = useState([]);
  const [file, setFile] = useState(null)
  const [showTextArea, setShowTextArea] = useState(false)
  const [othersText, setOthersText] = useState('')

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
    });

    if (tagId === 'others') {
      setShowTextArea(true);
    } else {
      setShowTextArea(false);
      setOthersText('');
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('body', e.target.reports.value);
    formData.append('pharmacyId', e.target.pharmacyId.value);
    formData.append('reportTagId', JSON.stringify(selectedTags));
    formData.append('image', file);

    handleSubmit(formData);
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
              <input 
                type="submit" 
                value="Submit" 
                className='modal--submit' 
                onClick={(e) => handleSubmit(e, selectedTags)}
              />
              <label htmlFor="reportTagOthers">Others</label>
            </div>
            {showTextArea && (
              <textarea
                name="othersText"
                placeholder="Please specify"
                value={othersText}
                onChange={(e) => setOthersText(e.target.value)}
              />
            )}
            <input type="file" name="image" onChange={handleFileChange} />
            <input type="submit" value="Submit" className="modal--submit" />
          </form>
        </div>
      )}
    </div>
  )
}

export default ModalPopup