import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoList = () => {

const {dispatch,newTask} = useContext(TodoContext)
  console.log("Here in TodoList",newTask)
  return (
    <div>TodoList
<div>
  {
    newTask.map((p)=>{
      return <div style={{"display":"flex","padding":"10px", "alignItems":"center","justifyContent":"center","gap":"50px"}}>
   <div>
   <input type="checkbox" key={Date.now} />
   </div>
   <div>
     <label> {p}</label>
     </div>
     <div>
    <button onClick={()=>{dispatch({"type" :"delete", "str":{p}})}}>*</button>
   </div>
   
  
      </div>
    })
  }
</div>

    </div>
  )
}

export default TodoList