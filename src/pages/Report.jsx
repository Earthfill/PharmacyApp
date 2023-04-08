import React from 'react'
import Arrow from '../components/Arrow'
import Reports from '../components/Reports'
import Text from '../components/Text'

const Report = () => {
  // const handleReviewSubmit = (reports) => {
  //   setReports([...reports, reports]);
  // };

  return (
    <div>
      <Arrow />
      <div className='report'>
        <div>
          <h3 className='report--main'><em>Reports</em></h3>
          <Text />
        </div>
        <button className='report--button'>SUBMIT</button>
        <Reports />
      </div>
    </div>
  )
}

export default Report