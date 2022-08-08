import React, { useState } from 'react'
import {useLocation} from 'react-router'
export const AccessHistory = () => {
  const location = useLocation()
  const email_id= location.state.email
  //files in public folder 
  //const [Files,setFiles] = useState([])
  function display(){
  }
  return (

    <div>
        <h1>Welcome to AccessHistory Page</h1>
        {/*<iframe src="/resume.pdf" height="200" width="300"></iframe>*/}
        <div align="left">
        <a href="/resume.pdf"><iframe src="/resume.pdf" alt="pdf"/>File</a> 
        <a href="/resume_sample.pdf"><iframe src="/resume_sample.pdf" alt="pdf"/>File</a>
        
        <button onClick={display}>show public </button>
        </div>
    </div>
  )
}
