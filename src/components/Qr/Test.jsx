// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Test = (props) => {
//     const [data, setData] = useState('No result');
//     const styles = {
//         border: "2px solid gray",
//         width: '500px',
//         height: '50px'
//     }
//     return (
//         <div>
//             <QrReader
//                 onResult={(result, error) => {
//                 if (!!result) {
//                     setData(result?.text);
//                 }
//                 if (!!error) {
//                     console.info(error);
//                 }
//             }}
//                 style={styles}
//             />
//             <p>{data}</p>
//         </div>
//     )
// }

// export default Test
