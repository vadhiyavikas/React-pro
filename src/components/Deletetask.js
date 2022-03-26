import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Deletetask = () => {

    

    var id = useParams().id;
    console.log(id)

    const delete1 = () =>{
        {
            axios.delete(`http://localhost:8080/tasks/${id}`, Deletetask).then(res =>{
                alert("data deleted..")
            })
        }
    }

    useEffect(() =>{

        delete1()
    },)
  return (
    <div>

    </div>
  )
}
