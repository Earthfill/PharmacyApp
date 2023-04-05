import React from 'react'

const User = () => {
  return (
    <div className='user'>
      <div className="user--ratings">
        <div>
          <h3 className='user--ratings--main'>Ratings</h3>
          <div className='user--ratings--info'>All the ratings of the Users who have used a registered pharmacy.</div>
        </div>
        <div className='ratings--view--general'>
          <div className='ratings--view'>
            <h1 className='ratings--rating'>4.1</h1>
            <div className='ratings--star'>
              <p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="side">
              <div>5</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-5"></div>
              </div>
            </div>
            <div className="side right">
              <div>63</div>
            </div>
            <div className="side">
              <div>4</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-4"></div>
              </div>
            </div>
            <div className="side right">
              <div>150</div>
            </div>
            <div className="side">
              <div>3</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-3"></div>
              </div>
            </div>
            <div className="side right">
              <div>15</div>
            </div>
            <div className="side">
              <div>2</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-2"></div>
              </div>
            </div>
            <div className="side right">
              <div>6</div>
            </div>
            <div className="side">
              <div>1</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-1"></div>
              </div>
            </div>
            <div className="side right">
              <div>20</div>
            </div>
          </div>
        </div>
      </div>
      <div className='user--review'>
        <h3 className='user--review--main'>Reviews</h3>
        <div className='user--review--info'>All the reviews of the Users who have used a registered pharmacy.</div>
        <p className='user--review--review'>Lorem ipsum dolor sit amet consectetur. Fames duis neque nunc consectetur quis at quam. Vel blandit lacus malesuada mi sed sed pellentesque nibh. Leo sem porta gravida turpis nulla morbi laoreet sit.</p>
        <p className='user--review--anonymous'><em>--Anonymous</em></p>
        <p className='user--review--all'><em>See more reviews</em></p>
      </div>
      <div className='user--report'>
        <h3 className='user--report--main'>Reports</h3>
        <div className='user--report--info'>All the reports from the Users who have used a registered pharmacy.</div>
        <p className='user--report--report'>Lorem ipsum dolor sit amet consectetur. Arcu augue euismod est tortor magnis ornare egestas adipiscing.</p>
        <p className='user--report--anonymous'><em>--Anonymous</em></p>
        <p className='user--report--all'><em>See more reports</em></p>
      </div>
      <div className='user--functionalities'>
        <p className='user--qr'><em>Generate QR Code</em></p>
        <p className='user--photos'><em>View photos</em></p>
      </div>
    </div>
  )
}

export default User