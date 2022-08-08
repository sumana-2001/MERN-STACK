import React from 'react'
import { useNavigate } from "react-router-dom";
//import login from './Login'
//import register from './Register'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
function HomePage(){
  const navigate = useNavigate();  
  return (
    <div className="homepage">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/login"></Nav.Link>
      <Nav.Link href="/register"></Nav.Link>
    </Nav>
    <Nav>
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav.Link href="/login">LOGIN</Nav.Link>
      <Nav.Link href="/register">REGISTER</Nav.Link>
      <Nav.Link href="/examples">EXAMPLES</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  <img  class="icon" src="logo1.png"/>
        <p className="text1">RELUA</p>
        <p className='text2'>Resume creator</p>
        <br />
        <div>
        <h2 className='text3'> What is a resume?</h2>
        <text className='text4'>A resume is a formal document that provides an overview of your
          professional qualifications,<br></br> including your relevant work experience,
          skills, education, and notable accomplishments. Usually paired <br></br>with a cover letter,
           a resume helps you demonstrate your abilities and convince employers you're qualified and hireable.</text>
        <h3 className='text3'>What should I include in Resume?</h3>
          <text className='text4'>You already know that the "must-have" resume sections are:Contact Information, Resume Profile, Work History, Education, and Skills.<br></br>
          There are a few optional sections that you can add as well, including achievemets, certifications, or a hobbies section.
          </text>
          <h4 className='text3'> Tips for good resume </h4>
          <text className='text4'> Keep your resume clear and concise.<br></br>Proofread your resume numerous times.<br></br>Limit your resume to two pages.
          <br></br>Tailor your resume to suit the position you are applying for.<br></br>
          Highlight what you have accomplished. <br></br>Be honest.<br></br>Quantify your achievements.<br></br>Use simple words and action verbs.
          </text>
           </div>
    </div>
  )
}
export default HomePage;


































/*import React from 'react'
import { useNavigate } from "react-router-dom";
//import login from './Login'
//import register from './Register'

function HomePage(){
  const navigate = useNavigate();  
  return (
    <div>
        <p>Welcome to HomePage!!</p>
        <br />
        <button color="primary" onClick={() => navigate("/login")}>LOGIN</button>
        <br />
        <br />
        <br />
        <button color="primary" onClick={() => navigate("/register")}>REGISTER</button>
    </div>
  )
}
export default HomePage;*/
