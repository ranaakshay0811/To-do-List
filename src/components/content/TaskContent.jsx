import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/authContext";
import { Await } from "react-router-dom";

   

   const TaskContext = createContext();
    export const TaskProvider = ({children})=>{
        const {setMessage,user} =useContext(AuthContext);
         const[allTasks,setAllTasks]=useState(null);
         const[recentTasks,setRecentTasks]=useState(null);
         const[latestTasks,setLatestTasks]=useState(null);

        const createTask = async (formdata) =>{
            const config ={
                method :"POST",
                headers:
                {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formdata)
            }
            const response = await fetch(`http://localhost:5000/tasks`,config);
             if (response.status ===201){
                setMessage("Task Created Successfully");
                getAllTasks(user.id);
             }
             else{
                setMessage("something went wrong");
             }

        }

        //get all tasks
        const getAllTasks = async (id) =>{
            const response = await fetch(`http://localhost:5000/tasks?userid=${id}`,{method:"GET"});
            if(response.ok){
                const tasks = await response.json();
                setAllTasks(tasks);
                const recent = tasks.slice(-3);
                setRecentTasks(recent);
                const latest = tasks[tasks.length-1];
                setLatestTasks(latest);

            }
              
        }



        //update task 
          const updateTask = async (formdata) =>{
            const config ={
                method:"PATCH",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify(formdata) 
            }
            const response = await fetch(`http://localhost:5000/tasks/${formdata.id}`,config);
            if(response.ok){
                setMessage("task updated sucessfully");
                getAllTasks(user.id);
            }else{
                setMessage("something went wrong");
            }
          }  



        useEffect(()=>{
          if (user){
            getAllTasks(user.id);
          }

        },[user])

        //delete  task
      const deleteTask = async(id)=>{
        const response = await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"});
        if(response.ok){
            setMessage("task deleted sucessfully");
            getAllTasks(user.id);
        }else{
            setMessage("something went wrong");
        }
      }
      


        return(
            <TaskContext.Provider value={{
                createTask,
                allTasks,
                latestTasks,
                recentTasks,
                updateTask,
                deleteTask


            }}>
                {children}
            </TaskContext.Provider>
        )
    }
    export default TaskContext;