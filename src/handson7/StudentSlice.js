import { createSlice } from "@reduxjs/toolkit";

const Student=[
    {Name : 'John',   Age: 24,  Course : 'MERN',  Batch : 'October',  },
    {Name : 'Doe',    Age: 25,  Course : 'MERN',  Batch : 'November', },
    {Name : 'Biden',  Age: 26,  Course : 'MERN',  Batch : 'September',},
    {Name : 'Barar',  Age: 22,  Course : 'MERN',  Batch : 'September',},
    {Name : 'Christ', Age: 23,  Course : 'MERN',  Batch : 'October',  },
    {Name : 'Elent',  Age: 24,  Course : 'MERN',  Batch : 'November', }
]

const StudentSlice = createSlice({
    name: 'Student',
    initialState: Student,
    reducers:{
        AddStudent : (state,action)=>{
            state.push(action.payload);
        },
        UpdateStudent: (state,action)=>{
            const {IndexValue,Name,Age,Course,Batch} = action.payload;
            const existingStudent = state.find((item,index)=>index===IndexValue)
            existingStudent.Name = Name
            existingStudent.Age = Age
            existingStudent.Course = Course
            existingStudent.Batch = Batch
        },
        DeleteStudent : (state,action)=>{
            const {IndexValue} = action.payload
            state.splice(IndexValue,1)
        }

    }
})

export default StudentSlice.reducer;
export const {AddStudent,UpdateStudent,DeleteStudent} = StudentSlice.actions