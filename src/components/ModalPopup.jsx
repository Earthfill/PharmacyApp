import React from 'react'
import { useState, useEffect } from 'react';
import useReportTags from '../hooks/useReportTags';

const ModalPopup = ({ handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

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
          <form action="#" className='modal--form--handler'>
              <input type="checkbox" name="reportTag1" value="no pharmacist" className='reportTagId'/>
              <label htmlFor="reportTag1">{reportTags[0].name}</label><br/>
              <input type="checkbox" name="reportTag2" value="pharmacy not found" className='reportTagId'/>
              <label htmlFor="reportTag2">{reportTags[1].name}</label><br/>
              <input type="checkbox" name="reportTag3" value="expired drugs" className='reportTagId'/>
              <label htmlFor="reportTag3">{reportTags[2].name}</label><br/>
              <input type="checkbox" name="reportTag4" value="expired license" className='reportTagId'/>
              <label htmlFor="reportTag4">{reportTags[3].name}</label><br/>
              <input type="checkbox" name="reportTag5" value="hard drugs" className='reportTagId'/>
              <label htmlFor="reportTag5">{reportTags[4].name}</label><br/>
            <input type="submit" value="Submit" className='modal--submit' />
          </form>
        </div>
      )}
    </div>
  )
}

export default ModalPopup