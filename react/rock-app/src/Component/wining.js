import React from 'react'
import '../style/style.css'
function wining (props) {
    const {value,value1}=props.data1
  return (
    <div className='app2'>
        <table >
            <tr>
                <th>Player</th>
                <th>Computer</th>
            </tr>
            <tr>
                <td>{value}</td>
                <td>{value1}</td>
            </tr>
        </table>
    </div>
  )
}

export default wining