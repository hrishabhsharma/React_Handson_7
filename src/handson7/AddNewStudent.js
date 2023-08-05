import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddStudent } from './StudentSlice';
import { useNavigate } from 'react-router-dom';
import './StudentAddUpdate.css'

const AddNewStudent = () => {
  const Navigator = useNavigate()
  const dispatch = useDispatch();
  
  const [Name,setName] = useState('')
  const [Age,setAge] = useState('')
  const [Course,setCourse] = useState('')
  const [Batch,setBatch] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Name!=='' && Age!=='' && Course!=='' && Batch!==''){
      dispatch(AddStudent({
        Name,
        Age,
        Course,
        Batch,
      }))
    }
    setName('')
    setAge('')
    setCourse('')
    setBatch('')
    Navigator(-1)
  }
  return (
    <>
    <form action='/Student'>
      <div className='Box'>
        <div className='FloatingInput'>
          <input type='text'  placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
          <label>Name</label>
        </div>
        <div className='FloatingInput'>
          <input type='text'  placeholder='Age' onChange={(e)=>setAge(e.target.value)}/>
          <label>Age</label>
        </div>
        <div className='FloatingInput'>
          <input type='text'  placeholder='Course' onChange={(e)=>setCourse(e.target.value)}/>
          <label>Course</label>
        </div>
        <div className='FloatingInput'>
          <input type='text'  placeholder='Batch' onChange={(e)=>setBatch(e.target.value)}/>
          <label>Batch</label>
        </div>
      </div>
      <div className='footer'>
          <button type='button' className='btn' onClick={()=>Navigator(-1)}>Cancel</button>
          <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </>
  )
}

export default AddNewStudent