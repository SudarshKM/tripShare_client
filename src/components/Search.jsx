import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 

function Search() {
  return (
    <>
    <div className="search d-flex justify-content-center p-md-2 shadow mt-2 rounded" style={{border:'1px solid darkslateblue'}}>
        <input type="text" placeholder='Destination' className='m-2 rounded form-control'  />
        <button className='btn btn-info rounded-5 mx-3'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
    </>
  )
}

export default Search