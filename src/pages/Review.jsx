import React from 'react'
import Arrow from '../components/Arrow'

const Review = () => {
  return (
    <div>
      <Arrow />
      <div className='review'>
        <h3 className='review--main'>Reviews</h3>
        <div className='review-review'>
            <p>Lorem ipsum dolor sit amet consectetur. Arcu augue euismod est tortor magnis ornare egestas adipiscing.</p>
            <p className='review--anonymous'><em>--Anonymous</em></p>
        </div>
        <div className='review-review'>
            <p>Lorem ipsum dolor sit amet consectetur. Fames duis neque nunc consectetur quis at quam. Vel blandit lacus malesuada mi sed sed pellentesque nibh. Leo sem porta gravida turpis nulla morbi laoreet sit.</p>
            <p className='review--anonymous'><em>--Anonymous</em></p>
            <br />
            <br />
            <p><em>See all reviews</em></p>
        </div>
      </div>
    </div>
  )
}

export default Review