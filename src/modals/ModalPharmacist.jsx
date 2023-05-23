import React, { useState } from 'react'
import EmailAddress from '../links/EmailAddress'
import PhoneNumber from '../links/PhoneNumber'

const ModalPharmacist = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {!isOpen && <div className='about--pharmacist'>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
        <div className="pharmacist" onClick={openModal}>{item.pharmacist.firstName} {item.pharmacist.middleName = '' ? '' : item.pharmacist.middleName} {item.pharmacist.lastName}</div>
      </div>}
      {isOpen && (
        <div className='modal--popup'>
          <div className="popup-content">
            <div>
              <img src={item.pharmacist.profilePicture} className='popup--content--image'/>
              <span className='popup--content--info'>{item.pharmacist.firstName} {item.pharmacist.middleName} {item.pharmacist.lastName}</span>
            </div>
            <div className='popup--content--info--info'>
              <div className='popup--content--regno'>REG. NO: {item.pharmacist.regNumber}</div>
              <div className='popup--content--phone'>PHONE: <PhoneNumber number={item.pharmacist.phoneNumber} /></div>
              <div className='popup--content--email'>EMAIL: <EmailAddress email={item.pharmacist.email} /></div>
            </div>
            <button className="close-button" onClick={closeModal}>&#10060;</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalPharmacist