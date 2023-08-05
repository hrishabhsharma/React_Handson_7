import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Student = () => {
  const ContextData = useSelector((state)=>state.Student)
  const Navigator = useNavigate()
  console.log(ContextData)
  return (
        <main>
            <div id='Caption'>
                <h1>Students Details</h1>
                <button id='AddNew' onClick={()=>Navigator('/AddStudent') }>Add New Student</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Course</td>
                        <td>Batch</td>
                        <td>Change</td>
                    </tr>
                {
                    ContextData.map((item,index) =>{
                        return(
                            <tr key={index} className='DataTable'>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><NavLink to={"/Student/"+index} state={{IndexValue:index}}>Edit</NavLink></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </main>
  )
}

export default Student