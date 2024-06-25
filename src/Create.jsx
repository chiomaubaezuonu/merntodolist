// import { set } from 'mongoose'
import React, { useState } from 'react'
import axios from 'axios'
// import "./App.css"

const Create = () => {

  const [task, setTask] = useState()
const handleAdd = () => {
axios.post('http://localhost:3001/add', {task:task})
.then(result =>{
  console.log(result)
  window.location.reload()
})
.catch(err => console.log(err))
}

  return (
    <div className='create_form'>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAdd} type='button'>Add</button>
    </div>
  )
}

export default Create