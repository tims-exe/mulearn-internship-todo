import React from 'react'
import '../styles.css'
import closeIcon from '../assets/close.png'

const Tasks = (props: { title: string }) => {
  return (
    <div className='task-container'>
        <div className="container-left">
            <input type="checkbox" />
            <p className='task-title'>{props.title}</p>
        </div>
        <button className='close-button' onClick={() => alert('worked')}>
            <img src={closeIcon} alt="" className='close-icon'/>
        </button>
    </div>
  )
}

export default Tasks