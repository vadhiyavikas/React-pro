import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Updatetask = () => {
    var id = useParams().id;
    const [data, setdata] = useState('')
    const [TaskName, setTaskName] = useState('')
    const [Description, setDescription] = useState('')
    const [Time, setTime] = useState('')
    const [Priority, setPriority] = useState('')

    const gettask = () => {
        axios.get(`http://localhost:8080/tasks/${id}`).then(res => {
            setdata(res.data.data)
            console.log(res.data.data)
        })
    }

    useEffect(() => {
        gettask()
    }, [])

    const Update = (e) => {
        var Updatetask = {
            TaskName: TaskName,
            Description: Description,
            Time: Time,
            Priority: Priority
        }
        e.preventDefault()
        axios.put(`http://localhost:8080/tasks/${id}`,Updatetask).then(res => {
            // alert("data updated")
            toast.success('🦄 Data updated succesfully', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            console.log(res.data.data)
        })
    }
    return (
        <div>
            <section class="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{ borderRadius: "15px" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Update Task</h2>

                                        <form onSubmit={Update}>

                                            <div class="form-outline mb-4">
                                                <input type="text" class="form-control form-control-lg" defaultValue={data.TaskName}onChange={(e) => { setTaskName(e.target.value) }} />
                                                <label class="form-label" for="form3Example1cg" name='TaskName'>Task Name</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="text" class="form-control form-control-lg" defaultValue={data.Description}onChange={(e) => { setDescription(e.target.value) }} />
                                                <label class="form-label" for="form3Example3cg" name='Description'>Description</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="text" class="form-control form-control-lg" defaultValue={data.Time}onChange={(e) => { setTime(e.target.value) }} />
                                                <label class="form-label" for="form3Example4cg" name='Time'>Time</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="text" class="form-control form-control-lg" defaultValue={data.Priority}onChange={(e) => { setPriority(e.target.value) }} />
                                                <label class="form-label" for="form3Example4cdg" name='Priority'>Priority</label>
                                            </div>


                                            <div class="d-flex justify-content-center">
                                                <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update Task</button>
                                                <ToastContainer/>
                                            </div>



                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
