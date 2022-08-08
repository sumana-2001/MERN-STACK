import React, {PureComponent} from 'react';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useNavigate } from "react-router-dom";
import PersonalDetails from './PersonalDetails';
import { useLocation } from 'react-router';
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
export const Pdfgenerator = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const Data = location.state.data; 
  console.log(Data) 
  function jsPdfGenerator(){
    var doc= new jsPDF('p','pt');
    doc.setFont('courier');
    doc.rect(20,20,doc.internal.pageSize.width - 40,doc.internal.pageSize.height - 40,'S');
    doc.setFontSize(20);
    doc.text(40,40,Data.First_Name);
    doc.text(150,40,Data.Last_Name);
    doc.setFontSize(20);
    doc.text(380,40,"Contact");
    doc.setFontSize(10);
    doc.text(40,60,"Objective:");
    doc.text(110,60,"To secure a challenging possition in a");
    doc.text(40,80,"reputable organization to expand my learnings,");
    doc.text(40,100,"knowledge and skills");
    doc.text(380,60,Data.Email_Id);
    doc.text(380,80,Data.MobileNo);
    doc.text(380,100,Data.Github);
    doc.text(380,120,Data.LinkedIn);
    doc.setFontSize(20);
    doc.text(40,140,"Educational Details");
    doc.setFontSize(10);
    doc.autoTable({ html: '#my-table' })
    doc.autoTable({
      startY:160,
      theme:'grid',
      head: [['Name of Insitution','Specialization','Year of Passing','Marks']],
      body: [
        [Data.sname ,Data.Squalification,Data.SYOF,Data.Smarks],
        [Data.cname ,Data.Cqualification,Data.CYOF,Data.Cmarks],
        [Data.uname ,Data.Uqualification,Data.UYOF,Data.Umarks],
        [Data.pname ,Data.Pqualification,Data.PYOF,Data.Pmarks],
      ],
    })
    doc.setFontSize(20);
    doc.text(40,290,"Projects Developed")
    doc.setFontSize(10);
    doc.text(40,310,"Project 1:")
    doc.text(60,330,"Title:")
    doc.text(100,330,Data.title1);
    doc.text(60,350,"Link:")
    doc.text(100,350,Data.link1);
    doc.text(60,370,"Description:")
    doc.text(130,370,Data.description1);
    doc.text(40,390,"Project 2:")
    doc.text(60,410,"Title:")
    doc.text(100,410,Data.title2);
    doc.text(60,430,"Link:")
    doc.text(100,430,Data.link2);
    doc.text(60,450,"Description:")
    doc.text(130,450,Data.description2);
    doc.text(40,470,"Project 3:")
    doc.text(60,490,"Title:")
    doc.text(100,490,Data.title3);
    doc.text(60,510,"Link:")
    doc.text(100,510,Data.link3);
    doc.text(60,530,"Description:")
    doc.text(130,530,Data.description3);
    doc.setFontSize(20);
    doc.text(40,550,"Skills/Languages")
    doc.setFontSize(10);
    doc.text(40,570,Data.skill1);
    doc.text(40,590,Data.skill2);
    doc.text(40,610,Data.skill3);
    doc.text(40,630,Data.skill4);
    doc.setFontSize(20);
    doc.text(40,650,"Experience/Internships")
    doc.setFontSize(10);
    doc.text(40,670,"Organization:")
    doc.text(120,670,Data.inst1);
    doc.text(40,690,"Duration:")
    doc.text(100,690,Data.dur1);
    doc.text(40,710,"Position:")
    doc.text(100,710,Data.pos1);
    doc.text(40,730,"Description:")
    doc.text(120,730,Data.desc1);
    doc.text(40,750,"Organization:")
    doc.text(120,750,Data.inst2);
    doc.text(40,770,"Duration:")
    doc.text(100,770,Data.dur2);
    doc.text(40,790,"Position:")
    doc.text(100,790,Data.pos2);
    doc.text(40,810,"Description:")
    doc.text(120,810,Data.desc2);
    doc.addPage('a4', 'portrait');
    doc.rect(20,20,doc.internal.pageSize.width - 40,doc.internal.pageSize.height - 40,'S');
    doc.text(40,40,"Organization:")
    doc.text(120,40,Data.inst3);
    doc.text(40,60,"Duration:")
    doc.text(100,60,Data.dur3);
    doc.text(40,80,"Position:")
    doc.text(100,80,Data.pos3);
    doc.text(40,100,"Description:")
    doc.text(120,100,Data.desc3);
    doc.save("resume.pdf");
  }
  return(<div className="pdfgenerator">
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
  <button className="buttonpdf " onClick={jsPdfGenerator}>Download Resume</button>
  <button className="buttonpdf " onClick={()=>navigate("/profilepage")}>Go to Profile page</button>
  </div>)
}
export default Pdfgenerator;
































/*import React, {PureComponent} from 'react';
import jsPDF from 'jspdf';
//import { useNavigate } from 'react-router';
import 'jspdf-autotable'
//import PersonalDetails from './PersonalDetails';
import { useLocation, useNavigate } from 'react-router';
export const Pdfgenerator = () =>{
  const location = useLocation();
  const Data = location.state.data; 
  const  primarykey = Data.Email_Id;
  const navigate = useNavigate();
  console.log(Data) 
  function jsPdfGenerator(){
    var doc= new jsPDF('p','pt');
    doc.setFont('courier');
    doc.rect(20,20,doc.internal.pageSize.width - 40,doc.internal.pageSize.height - 40,'S');
    doc.setFontSize(20);
    doc.text(40,40,Data.First_Name);
    doc.text(150,40,Data.Last_Name);
    doc.setFontSize(20);
    doc.text(380,40,"Contact");
    doc.setFontSize(10);
    doc.text(40,60,"Objective:");
    doc.text(110,60,"To secure a challenging possition in a");
    doc.text(40,80,"reputable organization to expand my learnings,");
    doc.text(40,100,"knowledge and skills");
    doc.text(380,60,Data.Email_Id);
    doc.text(380,80,Data.MobileNo);
    doc.text(380,100,Data.Github);
    doc.text(380,120,Data.LinkedIn);
    doc.setFontSize(20);
    doc.text(40,140,"Educational Details");
    doc.setFontSize(10);
    doc.autoTable({ html: '#my-table' })
    doc.autoTable({
      startY:160,
      theme:'grid',
      head: [['Name of Insitution','Specialization','Year of Passing','Marks']],
      body: [
        [Data.sname ,Data.Squalification,Data.SYOF,Data.Smarks],
        [Data.cname ,Data.Cqualification,Data.CYOF,Data.Cmarks],
        [Data.uname ,Data.Uqualification,Data.UYOF,Data.Umarks],
        [Data.pname ,Data.Pqualification,Data.PYOF,Data.Pmarks],
      ],
    })
    doc.setFontSize(20);
    doc.text(40,290,"Projects Developed")
    doc.setFontSize(10);
    doc.text(40,310,"Project 1:")
    doc.text(60,330,"Title:")
    doc.text(100,330,Data.title1);
    doc.text(60,350,"Link:")
    doc.text(100,350,Data.link1);
    doc.text(60,370,"Description:")
    doc.text(130,370,Data.description1);
    doc.text(40,390,"Project 2:")
    doc.text(60,410,"Title:")
    doc.text(100,410,Data.title2);
    doc.text(60,430,"Link:")
    doc.text(100,430,Data.link2);
    doc.text(60,450,"Description:")
    doc.text(130,450,Data.description2);
    doc.text(40,470,"Project 3:")
    doc.text(60,490,"Title:")
    doc.text(100,490,Data.title3);
    doc.text(60,510,"Link:")
    doc.text(100,510,Data.link3);
    doc.text(60,530,"Description:")
    doc.text(130,530,Data.description3);
    doc.setFontSize(20);
    doc.text(40,550,"Skills/Languages")
    doc.setFontSize(10);
    doc.text(40,570,Data.skill1);
    doc.text(40,590,Data.skill2);
    doc.text(40,610,Data.skill3);
    doc.text(40,630,Data.skill4);
    doc.setFontSize(20);
    doc.text(40,650,"Experience/Internships")
    doc.setFontSize(10);
    doc.text(40,670,"Organization:")
    doc.text(120,670,Data.inst1);
    doc.text(40,690,"Duration:")
    doc.text(100,690,Data.dur1);
    doc.text(40,710,"Position:")
    doc.text(100,710,Data.pos1);
    doc.text(40,730,"Description:")
    doc.text(120,730,Data.desc1);
    doc.text(40,750,"Organization:")
    doc.text(120,750,Data.inst2);
    doc.text(40,770,"Duration:")
    doc.text(100,770,Data.dur2);
    doc.text(40,790,"Position:")
    doc.text(100,790,Data.pos2);
    doc.text(40,810,"Description:")
    doc.text(120,810,Data.desc2);
    doc.addPage('a4', 'portrait');
    doc.rect(20,20,doc.internal.pageSize.width - 40,doc.internal.pageSize.height - 40,'S');
    doc.text(40,40,"Organization:")
    doc.text(120,40,Data.inst3);
    doc.text(40,60,"Duration:")
    doc.text(100,60,Data.dur3);
    doc.text(40,80,"Position:")
    doc.text(100,80,Data.pos3);
    doc.text(40,100,"Description:")
    doc.text(120,100,Data.desc3);
    doc.save("resume.pdf");
  }
  return(
  <><body><button className="button" onClick={jsPdfGenerator}>Download Resume</button><button onClick={() => navigate("/profilepage", { state: { email: primarykey } })}>Go to Profile page</button></body></>
  )
}
export default Pdfgenerator;*/

















/*import React, {PureComponent} from 'react';
import jsPDF from 'jspdf'
//import PersonalDetails from './PersonalDetails';
import { useLocation } from 'react-router';
export const Pdfgenerator = () =>{
  const location = useLocation();
  const Data = location.state.data; 
  console.log(Data) 
  //const fileName = "" 
  async function Submit(){
    const item = "resume.pdf"
    let result = await fetch("http://localhost:3000/appfiles", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/pdf",
        "Accept": "application/pdf"
      }
    })
    console.log(result.ContentType)
  }
  
  function jsPdfGenerator(){
    var doc= new jsPDF('p','pt');
    doc.setFont('courier');
    doc.text(10,10,Data.First_Name);
    doc.text(15,10,Data.Last_Name);
    doc.text(80,10,Data.Email_Id);
    doc.text(80,20,Data.MobileNo);
    doc.text(80,30,Data.Github);
    doc.text(80,40,Data.LinkedIn);
    doc.text(10,60,"Educational details");
    doc.text(10,70,"Institute");
    doc.text(20,70,"Year of Passing");
    doc.text(40,70,"qualification");
    doc.text(60,70,"marks");
    doc.text(10,80,Data.cname);
    doc.text(20,80,Data.CYOF);
    doc.text(30,80,Data.Cmarks);
    doc.text(40,80,Data.Cqualification);
    doc.text(10,90,Data.pname);
    doc.text(20,90,Data.PYOF);
    doc.text(30,90,Data.Pqualification);
    doc.text(40,90,Data.Pmarks);
    doc.text(10,100,Data.sname);
    doc.text(20,100,Data.SYOF);
    doc.text(30,100,Data.Squalification);
    doc.text(40,100,Data.Smarks);
    doc.text(10,110,Data.uname);
    doc.text(20,110,Data.UYOF);
    doc.text(30,110,Data.Uqualification);
    doc.text(40,110,Data.Umarks);
    doc.text(10,150,Data.description1);
    doc.text(10,190,Data.description2);
    doc.text(10,230,Data.description3);
    doc.text(260,260,Data.link1);
    doc.text(270,270,Data.link2);
    doc.text(280,280,Data.link3);
    doc.text(290,290,Data.title1);
    doc.text(20,20,Data.title2);
    doc.text(20,20,Data.title3);
    doc.text(20,20,Data.skill1);
    doc.text(20,20,Data.skill2);
    doc.text(20,20,Data.skill3);
    doc.text(20,20,Data.skill4);
    doc.text(20,20,Data.desc1);
    doc.text(20,20,Data.desc2);
    doc.text(20,20,Data.desc3);
    doc.text(20,20,Data.dur1);
    doc.text(20,20,Data.dur2);
    doc.text(20,20,Data.dur3);
    doc.text(20,20,Data.inst1);
    doc.text(20,20,Data.inst2);
    doc.text(20,20,Data.inst3);
    doc.text(20,20,Data.pos1);
    doc.text(20,20,Data.pos2);
    doc.text(20,20,Data.pos3);
    doc.save("resume.pdf"); 
  }
    return(<>
    <body><button className="button" onClick={jsPdfGenerator}>Download Resume</button></body>
             </>
    ) 
    
}
export default Pdfgenerator;*/














































/*import React, {PureComponent} from 'react';
import jsPDF from 'jspdf'
import { useLocation } from 'react-router';
import PersonalDetails from './PersonalDetails';
export const Pdfgenerator = () => {
  const location = useLocation();
  const Data = location.state.data 
  const jsPdfGenerator=() => {
    var doc= new jsPDF('p','pt');
    doc.setFont('courier');
    doc.text(100,100,"SKILLS: ")
    doc.text(120,150,Data.skill1);
    doc.text(120,200,Data.skill2);
    doc.text(120,250,Data.skill3);
    doc.text(120,300,Data.skill4);
    doc.save("resume.pdf");
  }
    return(<button onClick={jsPdfGenerator}>Download Resume</button>)
  
}
export default Pdfgenerator;*/