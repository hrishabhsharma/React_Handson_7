import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { UpdateStudent } from './StudentSlice'
import { DeleteStudent } from './StudentSlice'


const EditStudent = () => {
  const IndexValue = useLocation().state.IndexValue;
  const Student = useSelector((state)=>state.Student)
  const stdData = Student[IndexValue]
  const dispatch = useDispatch()
  const Navigator = useNavigate()
  const [Name,setName] = useState(stdData.Name)
  const [Age,setAge] = useState(stdData.Age)
  const [Course,setCourse] = useState(stdData.Course)
  const [Batch,setBatch] = useState(stdData.Batch)
  const handleSubmit = ()=>{
    dispatch(UpdateStudent({
      IndexValue,
      Name,
      Age,
      Course,
      Batch
    }))
    Navigator(-1)
  }
  const handleDelete = ()=>{
    dispatch(DeleteStudent({
      IndexValue
    }))
    Navigator('/Student')
  }
  return (
    <>
    <form action='/Student'>
      <div className='Box'>
        <div className='FloatingInput'>
          <input type='text'  placeholder={Name} onChange={(e)=>setName(e.target.value)}/>
          <label>Name</label>
        </div>
        <div className='FloatingInput'>
          <input type='text'  placeholder={Age} onChange={(e)=>setAge(e.target.value)}/>
          <label>Age</label>
        </div>
        <div className='FloatingInput'>
          <input type='text'  placeholder={Course} onChange={(e)=>setCourse(e.target.value)}/>
          <label>Course</label>
        </div>
        <div className='FloatingInput'>
        <input type='text'  placeholder={Batch} onChange={(e)=>setBatch(e.target.value)}/>
          <label>Batch</label>
        </div>
      </div>
      <div className='footer'>
          <button type='button' className='btn' onClick={()=>Navigator(-1)}>Cancel</button>
          <button type='button' className='btn' onClick={handleDelete}>Delete</button>
          <button type='button' onClick={handleSubmit}>Update</button>
        </div>
    </form>
    </>
  )
}

export default EditStudent