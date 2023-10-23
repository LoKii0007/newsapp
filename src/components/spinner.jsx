import React from 'react'
import loading from './loading.gif'

export default function Spinner() {

    return (
      <div className='text-center'>
        <img style={{width:"40px",height:"40px"}} src={loading} alt="loading" />
      </div>
    )
}
