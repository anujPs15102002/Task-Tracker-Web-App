import React from 'react'
import Anuj from '../other/Anuj'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
        <Anuj changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
      
    </div>
  )
}

export default AdminDashboard
