import {createContext, useReducer, useState} from "react";

export const TodoContext = createContext();

export const TodoProvider = ({children}) =>{


const Reducer = (state,action)=>{
  console.log("action:",action.str.p,"state",state)
    switch(action.type){
     
        case "delete":
            setNewTask(newTask.filter((p)=>{
                // return (p!="a")
                return(p!= action.str.p)
            }))
         
           
    }
    
    console.log("console:",newTask)

}


    const [task, setTask] = useState("")
const [newTask, setNewTask] = useState([])
const [state, dispatch] = useReducer(Reducer,0)


const updateTask = (value)=>{

    setNewTask([...newTask, value])
    
}

return (

<TodoContext.Provider value={{dispatch,task, setTask,updateTask,newTask}}>{children}</TodoContext.Provider>

)



}