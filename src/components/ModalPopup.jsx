import React from 'react'
import { useState, useEffect } from 'react';

const ModalPopup = () => {
  const [item, setItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const BASE_URL = `https://artisanbe.herokuapp.com/api/v1`;

  useEffect(() => {
    fetch(`${BASE_URL}/ReportTag`)
      .then(res => {
        if (!res.ok) {
          throw new Error;
        }
        return res.json();
      })
      .then(
        (result) => {
          setItem(result.data);
          setTimeout(() => {
            setItem(result.data);
          }, 900);
      })
  }, [])

  return (
    <div className="modal">
      {!isOpen && <button onClick={openModal} className='modal--report'>Report this pharmacy</button>}
      {isOpen && (
        <div className='modal--form'>
          <form action="#">
            <select name="reports">
              <option value="no pharmacist">{item[0].name}</option>
              <option value="pharmacy not found">{item[1].name}</option>
              <option value="expired drugs">{item[2].name}</option>
              <option value="expired license">{item[3].name}</option>
              <option value="hard drugs">{item[4].name}</option>
            </select>
            <input type="submit" value="Submit" className='modal--submit' />
          </form>
          <div className="modal-content">
            <button onClick={closeModal}>&#10060;</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalPopup