import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const Dashboard = () => {
  const [message, setMessage] = useState()
  const navigate = useNavigate();
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:4000/dashboard")
    .then(res => {
      if(res.data.valid) {
        setMessage(res.data.message)

      } else {
        navigate("/")
      }
    })
    .catch(err => console.log(err))
  })
  
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{message}</h3>



    </div>
  )
}

export default Dashboard