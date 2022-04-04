import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Deletetask = () => {

    

    var id = useParams().id;
    console.log(id)

    const delete1 = () =>{
        {
            axios.delete(`http://localhost:8080/tasks/${id}`, Deletetask).then(res =>{
                // alert("data deleted..")
                toast.info('🦄 Delete data', {
                    position: "top-center",
                    autoClose: 1100,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
        }
    }

    useEffect(() =>{

        delete1()
    },)
  return (
    <div>
            <ToastContainer/>

    </div>
  )
}
