import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddStudent } from './StudentSlice';
import { useNavigate } from 'react-router-dom';

const AddNewStudent = () => {
  const Navigator = useNavigate()
  const dispatch = useDispatch();
  const [Name,setName] = useState('')
  const [Age,setAge] = useState('')
  const [Course,setCourse] = useState('')
  const [Batch,setBatch] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(AddStudent({
      Name,
      Age,
      Course,
      Batch,
    }))
    setName('')
    setAge('')
    setCourse('')
    setBatch('')
    Navigator(-1)
  }
  return (
    <>
    <h1>New Student</h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
      <label>Age</label>
      <input type='text' value={Age} onChange={(e)=>setAge(e.target.value)}/>
      <label>Course</label>
      <input type='text' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
      <label>Batch</label>
      <input type='text' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
      <input type='submit' value='Submit'/>
    </form>
    </>
  )
}

export default AddNewStudent