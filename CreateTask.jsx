import React,{useContext,useState} from 'react'
import NewTask from '../TaskList/NewTask'
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] =useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setcategory] = useState('')
  const [NewTask, setNewTask] = useState({})
  const submitHandler=(e)=>{
    e.preventDefault()
   // console.log(taskTitle,taskDescription,taskDate,assignTo,category)
   setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
   //console.log(task);
   
   
   //console.log(JSON.parse(data));
   const data= userData
   data.forEach(function(elem){
    if(assignTo== elem.firstName){
      elem.tasks.push(NewTask)
      elem.taskCounts.newTask = elem.taskCounts.newTask+1
     
    }
   
    
   })
   setUserData(data)
   console.log(data);
   setTaskTitle('')
   setcategory('')
   setAssignTo('')
   settaskDate('')
   setTaskDescription('')
   
  }
  return (
    <div className=' p-5 bg-[#1c1c1c] mt-5 rounded '>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className=' flex  flex-wrap w-full  items-start justify-between'>
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'> Task Title</h3>
                <input
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Make a UI Design '/>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'> Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                  settaskDate(e.target.value)
                }}
                 className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1-px] border-grey-400 mb-4' type="date"/>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='employee name'/>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'> Category</h3>
                <input
                value={category}
                onChange={(e)=>{
                  setcategory(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev,etc'/>
                 </div>

                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className=' text-sm text-gray-300 mb-0.5'> Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'> Create Task</button>
                </div>
               
                
            </form>
        </div>
  )
}

export default CreateTask

