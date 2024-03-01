import React, { useContext, useState } from 'react';
import { formatDate } from '../helper';
import TaskContext from '../components/content/TaskContent';
import TaskForm from '../components/content/TaskForm';



function CreateTask(props) {

    const {latestTasks, recentTasks} = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);

    const edit = () => {
      setIsUpdate(true);
    }

    return (
        <div className='containter-fluid h-100'>
         <div className="row h-100">
          <div className='col-lg-6 d-flex justify-content-center align-items-center h-100 bg-primary text-white flex-column'>
            <div className="w-50">
           <TaskForm isUpdate = {isUpdate} data = {latestTasks} setIsUpdate={setIsUpdate} /></div>
         </div>
          <div className='col-lg-6 d-flex   justify-content-center align-items-center h-100 flex-column'>

            <div className="card w-75 bg-primary">
           
             <div className="card-body text-white">
              <div className="d-flex align-items-center">  
                <h5>Latest Task</h5>
                <button className='btn btn-info ms-auto' onClick={edit}>Edit</button>
              </div>
            
              <h4>{latestTasks?.tittle}</h4>
              <p>{latestTasks?.description}</p>
              
              <div className='d-flex align-items-center'>
                <p className='text-warning ' > Created :{formatDate(latestTasks?.duedate)}</p>  
                <p className='text-warning ms-auto '>Modified : {formatDate(latestTasks?.modifiedon)}</p>

              </div>
          
            </div>
            
            
          </div>

           <div className="card w-75 bg-primary mt-4">
           
             <div className="card-body text-white">
              <div className="d-flex align-items-center">  
                <h5>Recent Task</h5>
              </div>
              {
                recentTasks?.map((task) =>(
                 <div className='d-flex p-2 border border-warning'>
                  <span>{task?.tittle}</span>
                  <span className='ms-auto'>{formatDate(task?.duedate)}</span>
                 </div>
                ))
              }
            
             
          
            </div>
            
            
          </div>

         </div>
        </div>
        </div>
    );
}

export default CreateTask;