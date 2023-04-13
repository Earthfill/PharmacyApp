// import React from 'react'
// import { useState } from 'react';
// import { useParams } from 'react-router-dom'
// import ReactLoading from 'react-loading'

// const Reports = () => {
//   const [expanded, setExpanded] = useState(false);
//   const handleClick = () => {
//     event.preventDefault();
//     setExpanded(!expanded);
//     if (!expanded) {
//       setExpanded(true);
//     }
//   };
//   return (
//     <div className='report'>
//       <div className='report--report'>
//         <p>Lorem ipsum dolor sit amet consectetur. Arcu augue euismod est tortor magnis ornare egestas adipiscing.</p>
//         <p className='report--anonymous'><em>--Anonymous</em></p>
//       </div>
//       <div className='report--report'>
//         <p>Lorem ipsum dolor sit amet consectetur. Fames duis neque nunc consectetur quis at quam. Vel blandit lacus malesuada mi sed sed pellentesque nibh. Leo sem porta gravida turpis nulla morbi laoreet sit.</p>
//         <p className='report--anonymous'><em>--Anonymous</em></p>
//         <br />
//         <br />
//         <a href='' onClick={handleClick}>{!expanded && <em>See all reports</em>}</a>
//         {expanded && <p>Lorem ipsum dolor sit amet consectetur. Arcu augue euismod est tortor magnis ornare egestas adipiscing.</p>}
//         {expanded && <p className='report--anonymous'><em>--Anonymous</em></p>}
//       </div>
//     </div>
//     )
// }

// export default Reports