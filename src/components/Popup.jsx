import React, { useEffect, useRef, useState } from 'react';
import { formatDate } from '../helper';
import TaskForm from './content/TaskForm';
import { useContext } from 'react';
import TaskContext from './content/TaskContent';
import AuthContext from '../auth/authContext';

function Popup(props) {
    const {task}=props;
    const closeBtn =useRef(null);
    const{deleteTask}=useContext(TaskContext);
     const {setMessage,message}= useContext(AuthContext);
    const [displayText,setDisplayText]=useState('Are you sure? you want to delete this task?')
     

     const changeText= ()=>{
     setDisplayText("task deleted sucessfully")
     };
     const onDelete=()=>{
      deleteTask(task.data.id);
      
     };
     const handleClick = ()=>{
      onDelete();
      changeText();
    
     }


      
    return (
      
        <div className="modal" tabIndex="-1" id='task-popup'>
  <div className="modal-dialog">
    <div className="modal-content bg-primary text-white">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button ref={closeBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {
            task?.type==="view"?
        <div><h4>{task.data?.tittle}</h4>``
        <p>{task.data?.description}</p>
        
        <div className='d-flex align-items-center'>
          <p className='text-warning ' > Created :{formatDate(task.data?.duedate)}</p>  
          <p className='text-warning ms-auto '>Modified : {formatDate(task.data?.modifiedon)}</p>

        </div></div>:task?.type==="edit"?
        <div><TaskForm isUpdate={true} data={task.data} isPopup={true} closeBtn={closeBtn}/></div>:
        <div>
          
          <p>{displayText}</p>
              
              <div className="d-flex">
            <button className="ms-auto btn btn-danger" onClick={handleClick}>yes</button>
            <button className="ms-2 btn btn-danger" data-bs-dismiss="modal">no</button>

          </div>
          <div />
        
        </div>
        }
      </div>
     
    </div>
  </div>
</div>
      
    );
}

export default Popup;