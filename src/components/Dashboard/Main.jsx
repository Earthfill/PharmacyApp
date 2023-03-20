import React from 'react'

const Main = () => {
  return (
    <div className='main'>
      <div className='dashboard--main'>
          <span className='dashboard--title'>Admin / </span><span className='dashboard--title--highlight'> Pharmacies</span>
      </div>
      <div className='dashboard--main--search'>
        <form action="">
            <input className='dashboard--main--search--input' type="text" placeholder='Search anything here'/>
            <button className='dashboard--main--search--button' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
      <div className='dashboard--main--heading'>
        <div className='dashboard--main--heading--bold'>Pharmacies</div>
        <div>Total pharmacies: xxxxxx</div>
      </div>
      <div className='dashboard--main--table'>
        <table>
          <tr>
            <th>ID</th>
            <th>Pharmacy Name</th>
            <th>Registration Number</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
          <tr>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className='dashboard--main--table--info'></td>
            <td className="dashboard--main--table--info"></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Main