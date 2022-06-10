import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const Task = () => {

  const {task, setTask,updateTask} = useContext(TodoContext)


  return (
    <div>
    <input value={task} type="text" onChange={(e)=>{
      setTask(e.target.value)
    }} 
    placeholder='Enter The Task...'/>
    <button onClick={()=>{
      updateTask(task)
      setTask("")
      }}>+</button>


    </div>
  )
}

export default Task