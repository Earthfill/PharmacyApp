import React from 'react'
import Text from '../components/Text'

const Error = () => {
  return (
    <div>
      <div className='error'>
        <div>
          <img src="/assets/error.png" alt="" className='error--image'/>
        </div>
        <div className="error--input">
          <strong className='error--fill'><em>Oops...</em></strong>
          <p className='error--fill'>Pharmacy not registered</p>
        <div>
          <Text />
          <button className='error--button'>SUBMIT</button>
        </div>
        <div>
          <p className='error--fill'><em>Upload Pharmacy picture</em></p>
          <p className='error--fill'>Input address</p>
          <Text />
          <button className='error--button'>SUBMIT</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Error