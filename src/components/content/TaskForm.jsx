import React, { useContext,useEffect, useState, } from 'react';
import TaskContext from './TaskContent';
import AuthContext from '../../auth/authContext';

function TaskForm(props) {
    const init={
        tittle:"",
        description:"",
        duedate:""
    }
    const { isUpdate, data,setIsUpdate,isPopup ,closeBtn} = props;
    const {message,user,setMessage } = useContext(AuthContext);
    const {createTask,updateTask} = useContext(TaskContext);

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (isUpdate && data) {
            setFormData(data);


        }
    },[isUpdate,data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))

    }
    const onCreate = (e) => {
        e.preventDefault();
        createTask(formData);
    }
    const onUpdate = (e)=>{
        e.preventDefault();
        updateTask(formData);
    }
    const onCancel =(e)=>{
       e.preventDefault();
       if(!isPopup){
       setIsUpdate(false);
    }
       setFormData(init);
       setMessage("");
       closeBtn.current.click();
    }
    useEffect(()=>{
        setMessage("");
    },[])

    return (
       
           <div className='p-2 '>
            <h3 className="text-white">{isUpdate ? "Update Task" : "Create Task"}</h3>
            <div className="card" >
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Tittle</label>
                            <input type='text' name='tittle' className='form-control' value={formData?.tittle} onChange={handleChange}/>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                                <textarea name="description"  rows="10" className='form-control' value={formData?.description} onChange={handleChange} />                        
                                </div>

                        <div className='mb-3'>
                            <label className='form-label'>Due Date</label>
                            <input type='datetime-local' name='duedate' className='form-control' value={formData?.duedate} onChange={handleChange} />
                        </div>
                        <p>{message}</p>
                        { isUpdate ? <>
                        <button className='btn btn-danger me-3' onClick={onUpdate}>Update Task</button>
                        <button className='btn btn-warning ' onClick={onCancel}  >Cancel</button>

                        </>:
                        <button className='btn btn-primary' onClick={onCreate}>Create task</button>
                    }
                    </form>
                </div>

            </div>
            </div> 
      
    );
}

export default TaskForm;
