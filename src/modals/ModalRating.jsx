import { useState } from "react"
import Popups from "../components/Popups"
import StarRating from "../components/StarRating"

const ModalRating = ({ showPopup, reviews, setReviews, isPosted, handleRate, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="rating--modal">
      {!isOpen && <button onClick={openModal} className="modal--rating">Rate pharmacy</button>}
      {isOpen && (
        <div className="modal--wrapper">
          <div className='about--rating'>
            <StarRating onRate={handleRate} />
            {!showPopup && <p className='about--rating--bad'>Bad</p>}
            {!showPopup && <p className='about--rating--great'>Great</p>}
            {showPopup && <Popups />}
            {showPopup &&
            <div className='about--fill'>
              <form>
                <textarea name="" id="" cols="1" rows="2" 
                  type='text' 
                  placeholder='Post a review (optional)'
                  value={reviews}
                  onChange={(e) => setReviews(e.target.value)}
                  className='about--form'
                />
              </form>
            </div>
            }
            {isPosted && <p className='about--posting'>Thanks for posting!</p>}
            <button className="modal--rating--close--button" onClick={closeModal}>&#10060;</button>
          </div>
          {showPopup && <button type="submit" className='about--button' onClick={handleSubmit}>POST</button>}
        </div>
      )}
    </div>
  )
}

export default ModalRating