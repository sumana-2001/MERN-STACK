import React,{useState} from 'react'
import { useLocation,useParams } from 'react-router';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
//import {Breadcrumb,Alert, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
export function ProfilePage(){
  //super(props);
  const {state} = useLocation();
  //console.log(useLocation())
  const email_id = state.email 
  console.log(email_id)
  //console.log("this is pro page",state.email)
  //console.log(this.props);
  const navigate = useNavigate(); 
    //console.log(props)
  const [show,setShow] = useState(false)
  function Store(){
    navigate("/AccessHistory",{state:{email:email_id}})
  }

  function Shift(){
    navigate("/ResumeForm/PersonalDetails",{state:{email:email_id}})

  }
  function Move(){
    navigate("/VideoResume/VideoPage",{state:{email:email_id}})}
  return (
    <div className='profilepage'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/profilepage"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/"></Nav.Link>
    </Nav>
    <Nav>
    <Navbar.Brand href="/profilepage"></Navbar.Brand>
    <Nav.Link href="/">LOGOUT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
    <><p className='homepagetext'>WELCOME </p>
    <p className='primarykey'>{email_id}</p> 
    <br />
    <button  className='button' type="submit" onClick={()=>{Shift();}}>Create New Resume</button>
    <button  className='button' type="submit" onClick={()=>{Move();}}>Create Video Resume</button>
    {/*<button type="submit" onClick={()=>{Store();}}>Access History</button>*/};
    
     {show ? 
    <div align="bottom-left">
        <a href="/resume.pdf"><iframe src="/resume.pdf" alt="pdf"/>File</a> 
        
        <a href="/resume_sample.pdf"><iframe src="/resume_sample.pdf" alt="pdf"/>File</a>
        <br/>
        <a href="/sumana_first_video_resume.mp4"><video src="/sumana_first_video_resume.mp4" width={250} height={300} controls autoPlay/>Video</a>
        <br/> 
    </div> : null}
    </> 
    <button onClick={()=>setShow(!show)} >Access History</button>
    </div>
  )
  
}
export default ProfilePage;




















/*import React,{useState} from 'react'
import { useLocation,useParams } from 'react-router';
//import Login from './Login'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import {Breadcrumb,Alert, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function ProfilePage(){
  //super(props);
  const {state} = useLocation();
  //console.log(useLocation())
  const email_id = state.email 
  console.log(email_id)
  //console.log("this is pro page",state.email)
  //console.log(this.props);
  const navigate = useNavigate(); 
    //console.log(props)
    function Shifttovideo(){
      navigate("/VideoResume/VideoPage",{state:{email:email_id}})
    }
    function Store(){
      navigate("/AccessHistory",{state:{email:email_id}})
    }
  function Shift(){
    navigate("/ResumeForm/PersonalDetails",{state:{email:email_id}})
  }
  function Logout(){
    navigate("/");
  }
  return (
    <>
    <div className="profilepage">
      <h1 div="heading">WELCOME TO PROFILE PAGE {email_id}</h1> 
    <br />
    <button type="submit" onClick={()=>{Shift();}}>Create New Resume</button>
    <button type="submit" onClick={()=>{Store();}}>Access History</button>
    <button type="submit" onClick={()=>{Shifttovideo();}}>Create New Video Resume</button>
    <button type="submit" onClick={()=>{Logout();}}>LOGOUT</button></div>
    </> 
    
  )
  
}
export default ProfilePage;*/