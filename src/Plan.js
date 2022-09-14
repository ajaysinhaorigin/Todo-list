import React from 'react'

function Plan(props) {
    return (
        <>
         <li key={props.i} className="shadow p-2 my-2 col-sm-9">{props.value}</li>
         <button className='btn btn-danger my-3 col-sm-2 offset-1' onClick={() => props.sendData(props.id)} >X</button>
      </>
  )
}

export default Plan