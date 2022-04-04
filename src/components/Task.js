import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import { Link } from 'react-router-dom'



export const Task = () => {
    const [tasklist, settasklist] = useState([])
    // const gettask = () => {
    //     axios.get('http://localhost:3000/tasks').then(res => {
    //         settasklist(res.data.data)
    //         console.log(res.data.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    const getTasks =  () => {
         axios.get('http://localhost:8080/tasks').then(res=>{
            console.log("res",res)
            settasklist(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div>
            <section class="vh-100" style={{ backgroundColor: '#eee' }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card rounded-3">
                                <div class="card-body p-4">

                                    <h4 class="text-center my-3 pb-3">To Do App</h4>

                                    {/* <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div class="col-12">
                <div class="form-outline">
                  <input type="text" id="form1" class="form-control" />
                  <label class="form-label" for="form1">Enter a task here</label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-warning">Get tasks</button>
              </div>
            </form> */}

                                    <table class="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No+</th>
                                                <th scope="col">Task Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Priority</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                               tasklist.map((task)=>{
                                                    return (
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>{task.TaskName}</td>
                                                            <td>{task.Description}</td>
                                                            <td>{task.Time}</td>
                                                            <td>{task.Priority}</td>

                                                            <td>
                                                                <Link to={`/table/Update/${task._id}`} className="btn btn-primary">Update</Link>
                                                                <Link to={`/table/Delete/${task._id}`} className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
