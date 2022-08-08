import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormValidate from "./FormValidate";
import { useLocation } from "react-router"; 
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
export const ConfirmPage = () => {
    const location = useLocation();
    const primarykey = location.state.email 
    console.log("primary key : ",primarykey)
    const [Data,setData] = useState("")
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    //useEffect(()=>{
     //   Confirm()
    //})

    function shift(){
      navigate("/ResumeForm/Pdfgenerator",{state:{data:Data}})
    }

    function display(){
      setShow(!show)
    }


    async function Confirm(){
        let result = await fetch("http://localhost:3000/fetch", {
            method: "POST",
            body: JSON.stringify({primarykey}),
            headers: {
              "Content-Type": "application/json",
              "Accept" : "application/json"
            }
          });
        if(result == null){
           alert("cannot display data")
        }
        result = await result.json() 
        //console.log(result, "array")
        setData(result.data) 
    };
    console.log(Data)
    Object.keys(Data).forEach(key =>{
      console.log(key);
      console.log(Data[key]);
      if(Data[key] == null){
        Data[key] = "NA";
      }
    })
       
  return (
    <div className="confirmpage">
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
      <h1 className="heading">ConfirmPage</h1>
    <body>
    <div>
      <div align = "center"><input type = "checkbox" id = "check" onClick={Confirm}/>I attest that the information I have entered is true</div></div>
      {show ?
        <div><p>First Name: {Data.First_Name}</p>
          <p>Last Name: {Data.Last_Name}</p>
          <p>Email ID: {Data.Email_Id}</p>
          <p>Mobile Number: {Data.MobileNo}</p>
          <p>Github URL: {Data.Github}</p>
          <p>LinkedIn URL: {Data.LinkedIn}</p>
          <p>10th Details</p>
          <p>Institution Name: {Data.cname}</p>
          <p>Board: {Data.Cqualification}</p>
          <p>Marks: {Data.Cmarks}</p>
          <p>Year of Passing: {Data.CYOF}</p>
          <p>12th Details</p>
          <p>Institution Name: {Data.pname}</p>
          <p>Specialization: {Data.Pqualification}</p>
          <p>Marks: {Data.Pmarks}</p>
          <p>Year of Passing: {Data.PYOF}</p>
          <p>UG Details</p>
          <p>Institution Name: {Data.sname}</p>
          <p>Specialization: {Data.Squalification}</p>
          <p>Marks: {Data.Smarks}</p>
          <p>Year of Passing: {Data.SYOF}</p>
          <p>PG Details</p>
          <p>Institution Name: {Data.uname}</p>
          <p>Specialization: {Data.Uqualification}</p>
          <p>Marks: {Data.Umarks}</p>
          <p>Year of Passing: {Data.UYOF}</p>
          <p>Projects Developed</p>
          <p>Project 1: </p>
          <p>Title: {Data.title1}</p>
          <p>Description: {Data.description1}</p>
          <p>Link: {Data.link1}</p>
          <p>Project 2: </p>
          <p>Title: {Data.title2}</p>
          <p>Description: {Data.description2}</p>
          <p>Link: {Data.link2}</p>
          <p>Project 3: </p>
          <p>Title: {Data.title3}</p>
          <p>Description: {Data.description3}</p>
          <p>Link: {Data.link3}</p>
          <p>Skills</p>
          <p>Programming skill: {Data.skill1}</p>
          <p>Developing skill: {Data.skill2}</p>
          <p>Leadership skill: {Data.skill3}</p>
          <p>General skill: {Data.skill4}</p>
          <p>Experience Details</p>
          <p>Experience 1:</p>
          <p>Organization: {Data.inst1}</p>
          <p>Position: {Data.pos1}</p>
          <p>Duration: {Data.dur1}</p>
          <p>Description: {Data.desc1}</p>
          <p>Experience 2:</p>
          <p>Organization: {Data.inst2}</p>
          <p>Position: {Data.pos2}</p>
          <p>Duration: {Data.dur2}</p>
          <p>Description: {Data.desc2}</p>
          <p>Experience 3:</p>
          <p>Organization: {Data.inst3}</p>
          <p>Position: {Data.pos3}</p>
          <p>Duration: {Data.dur3}</p>
          <p>Description: {Data.desc3}</p>
        </div> : null}
      <button className="button" onClick={() => setShow(!show)}>Show Details</button>

    </body><body><button className="button" onClick={shift}> Generate PDF </button></body>

    </div>
    
  )
}

















/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormValidate from "./FormValidate";
import { useLocation } from "react-router"; 

export const ConfirmPage = () => {
    const location = useLocation();
    const primarykey = location.state.email 
    console.log("primary key : ",primarykey)
    const [Data,setData] = useState("")
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    //useEffect(()=>{
     //   Confirm()
    //})

    function shift(){
      navigate("/ResumeForm/Pdfgenerator",{state:{data:Data}})
    }

    function display(){
      setShow(!show)
    }


    async function Confirm(){
        let result = await fetch("http://localhost:3000/fetch", {
            method: "POST",
            body: JSON.stringify({primarykey}),
            headers: {
              "Content-Type": "application/json",
              "Accept" : "application/json"
            }
          });
        if(result == null){
           alert("cannot display data")
        }
        result = await result.json() 
        //console.log(result, "array")
        setData(result.data) 
    };
    Object.keys(Data).forEach(key =>{
      console.log(key);
      console.log(Data[key]);
      if(Data[key] == null){
        Data[key] = "NA";
      }
    })
       
  return (
    <div>
      <h1>ConfirmPage</h1>
    <body>
    <div>
      <div align = "center"><input type = "checkbox" id = "check" onClick={Confirm}/>I attest that the information I have entered is true</div></div>
      {show ?
        <div><p>First Name: {Data.First_Name}</p>
          <p>Last Name: {Data.Last_Name}</p>
          <p>Email ID: {Data.Email_Id}</p>
          <p>Mobile Number: {Data.MobileNo}</p>
          <p>Github URL: {Data.Github}</p>
          <p>LinkedIn URL: {Data.LinkedIn}</p>
          <p>10th Details</p>
          <p>Institution Name: {Data.cname}</p>
          <p>Board: {Data.Cqualification}</p>
          <p>Marks: {Data.Cmarks}</p>
          <p>Year of Passing: {Data.CYOF}</p>
          <p>12th Details</p>
          <p>Institution Name: {Data.pname}</p>
          <p>Specialization: {Data.Pqualification}</p>
          <p>Marks: {Data.Pmarks}</p>
          <p>Year of Passing: {Data.PYOF}</p>
          <p>UG Details</p>
          <p>Institution Name: {Data.sname}</p>
          <p>Specialization: {Data.Squalification}</p>
          <p>Marks: {Data.Smarks}</p>
          <p>Year of Passing: {Data.SYOF}</p>
          <p>PG Details</p>
          <p>Institution Name: {Data.uname}</p>
          <p>Specialization: {Data.Uqualification}</p>
          <p>Marks: {Data.Umarks}</p>
          <p>Year of Passing: {Data.UYOF}</p>
          <p>Projects Developed</p>
          <p>Project 1: </p>
          <p>Title: {Data.title1}</p>
          <p>Description: {Data.description1}</p>
          <p>Link: {Data.link1}</p>
          <p>Project 2: </p>
          <p>Title: {Data.title2}</p>
          <p>Description: {Data.description2}</p>
          <p>Link: {Data.link2}</p>
          <p>Project 3: </p>
          <p>Title: {Data.title3}</p>
          <p>Description: {Data.description3}</p>
          <p>Link: {Data.link3}</p>
          <p>Skills</p>
          <p>Programming skill: {Data.skill1}</p>
          <p>Developing skill: {Data.skill2}</p>
          <p>Leadership skill: {Data.skill3}</p>
          <p>General skill: {Data.skill4}</p>
          <p>Experience Details</p>
          <p>Experience 1:</p>
          <p>Organization: {Data.inst1}</p>
          <p>Position: {Data.pos1}</p>
          <p>Duration: {Data.dur1}</p>
          <p>Description: {Data.desc1}</p>
          <p>Experience 2:</p>
          <p>Organization: {Data.inst2}</p>
          <p>Position: {Data.pos2}</p>
          <p>Duration: {Data.dur2}</p>
          <p>Description: {Data.desc2}</p>
          <p>Experience 3:</p>
          <p>Organization: {Data.inst3}</p>
          <p>Position: {Data.pos3}</p>
          <p>Duration: {Data.dur3}</p>
          <p>Description: {Data.desc3}</p>
        </div> : null}
      <button onClick={() => setShow(!show)}>Toggle</button>

    </body><body><button onClick={shift}> Generate PDF </button></body>
    

    </div>
    
  )
}*/














/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormValidate from "./FormValidate";
import { useLocation } from "react-router"; 


export const ConfirmPage = () => {
    const location = useLocation();
    const primarykey = location.state.email 
    console.log("primary key : ",primarykey)
    const [Data,setData] = useState("")
    const navigate = useNavigate();
    //useEffect(()=>{
      //  Confirm()
    //})
    async function Confirm(){
      console.log("final page: ",{primarykey})
        let result = await fetch("http://localhost:3000/fetch", {
            method: "POST",
            body: JSON.stringify({primarykey}),
            headers: {
              "Content-Type": "application/json",
              "Accept" : "application/json"
            }
          });
        if(result.status == 404){
           alert("cannot display data")
        }
        result = await result.json() 
        setData(result.data) 
    };
        
  return (
    <><div>
      <h1>ConfirmPage</h1>
      <button onClick={Confirm}>show details</button>
      <p>{Data.Email_Id}</p>
    </div><div><button onClick={() => navigate("/profilepage")}>Go to Profile page</button></div></>
  )
}*/
