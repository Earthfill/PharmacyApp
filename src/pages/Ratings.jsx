import React from 'react'
import Arrow from '../components/Arrow'

const Ratings = () => {
  return (
    <div className='ratings'>
      <Arrow />
        <div>
          <h3 className='ratings--main'>Ratings</h3>
          <div className='ratings--info'>All the ratings of the Users who have used a registered pharmacy.</div>
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
                        <span className="ratings--star--empty">
                            <span className="fa fa-star"></span>    
                        </span>
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
                  <div>150</div>
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
                  <div>63</div>
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
  )
}

export default Ratings