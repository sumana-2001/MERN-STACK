import React,{  useState} from 'react'
import {Button} from 'reactstrap'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom'
import FormValidate from './FormValidate';
import ProfilePage from '../ProfilePage';
//import './ResumeForm/Educationaldetails'
export const PersonalDetails = () => {
     
  const checkForm = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

    const navigate = useNavigate();
    //const {state1} = useLocation();
    //console.log(state.email)
    //const initialValues = {fname:"",lname:"",email_id:"",mobile:"",linkedin:"",github:""};
    const location = useLocation()
    //console.log(state)
    //const emailid = state.email
    const {values,errors ,handleSubmit,handleChange} = FormValidate(checkForm);
    //const {Submitemail} = ProfilePage();
    const primarykey = location.state.email 
    //console.log(state)
    console.log("primary key : ",primarykey)
    const initialValues = values
    console.log("intial values",initialValues);
    async function Submit(){
    let item = initialValues
    console.warn(item)
    let result = await fetch("http://localhost:3000/update", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    if(result.status == 404){
      alert("Cannot update");
    }
    result = await result.json();
    console.warn("result", result);
    }
    function shift(){
      navigate("/ResumeForm/Educationaldetails",{state:{email:primarykey}});
    }
    //<pdfgenerator initialValues/>
  return (
    <div className="mainpersonal">
            <div className="subpersonal">
        <div className="col-sm-10 offset-sm-0">
    <div className='personal details'>
      <label className='heading'>Personal Details</label>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" onChange={handleChange} className="form-control" required placeholder="First Name" />
        <div style={{ fontSize: 15, color: "red" }}>{errors.fname}</div>
        <br />
        <input type="text" name="lname" onChange={handleChange} className="form-control" required placeholder="Last Name" />
        <div style={{ fontSize: 15, color: "red" }}>{errors.lname}</div>
        <br />
        <input type="text" name="email_id" onChange={handleChange} className="form-control" required placeholder="Email Id" />
        <div style={{ fontSize: 15, color: "red" }}>{errors.email_id}</div>
        <br />
        <input type="text" name="mobile" onChange={handleChange} className="form-control" required placeholder="Mobile Number" />
        <div style={{ fontSize: 15, color: "red" }}>{errors.mobile}</div>
        <br />
        <input type="url" name="linkedin" onChange={handleChange} className="form-control" required placeholder="Linked URL" />
        <div style={{ fontSize: 15, color: "red" }}>{errors.linkedin}</div>
        <br />
        <input type="url" name="github" onChange={handleChange} className="form-control" required placeholder="Github URL" />
        <br />
        {/*<input type="submit" value="Submit" />*/}
        {/*<button type="submit" onClick={Submit}>SUBMIT</button>*/}
        <button className='button' type="submit" onClick={() => navigate(-1)}>BACK</button>
        <button className='button' type="submit" onClick={()=>{Submit(); shift();}}>NEXT</button>
        {/*<p>{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname}</p>*/}
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default PersonalDetails;
























/*import React,{  useState } from 'react'
import {Button} from 'reactstrap'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom'
import FormValidate from './FormValidate';
import pdfgenerator from './Pdfgenerator';
import ProfilePage from '../ProfilePage';
//import './ResumeForm/Educationaldetails'
export const PersonalDetails = () => {
     
  const checkForm = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

    const navigate = useNavigate();
    //const {state1} = useLocation();
    //console.log(state.email)
    //const initialValues = {fname:"",lname:"",email_id:"",mobile:"",linkedin:"",github:""};
    const location = useLocation()
    //console.log(state)
    //const emailid = state.email
    const {values,errors ,handleSubmit,handleChange} = FormValidate(checkForm);
    //const {Submitemail} = ProfilePage();
    const primarykey = location.state.email 
    //console.log(state)
    console.log("primary key : ",primarykey)
    const initialValues = values
    console.log("intial values",initialValues);
    async function Submit(){
    let item = initialValues
    console.warn(item)
    let result = await fetch("http://localhost:3000/update", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    if(result.status == 404){
      alert("Cannot update");
    }
    result = await result.json();
    console.warn("result", result);
    }
    function shift(){
      navigate("/ResumeForm/Educationaldetails",{state:{email:primarykey}});
    }
    //<pdfgenerator initialValues/>
  return (
    <div>
      <label >Personal Details</label>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="fname" onChange={handleChange} className="form-control" required placeholder="First Name" />
        <div style={{ fontSize: 8, color: "red" }}>{errors.fname}</div>{errors.fname && <h5>{errors.fname}</h5>}
        <br />
        <label>Last Name:</label>
        <input type="text" name="lname" onChange={handleChange} className="form-control" required placeholder="Last Name" />
        <div style={{ fontSize: 8, color: "red" }}>{errors.lname}</div>{errors.lname && <h5>{errors.lname}</h5>}
        <br />
        <label>Email ID</label>
        <input type="text" name="email_id" onChange={handleChange} className="form-control" required placeholder="Email Id" />
        <div style={{ fontSize: 8, color: "red" }}>{errors.email_id}</div>{errors.email_id && <h5>{errors.email_id}</h5>}
        <br />
        <label>Mobile No:</label>
        <input type="text" name="mobile" onChange={handleChange} className="form-control" required placeholder="Mobile Number" />
        <div style={{ fontSize: 8, color: "red" }}>{errors.mobile}</div>{errors.mobile && <h5>{errors.mobile}</h5>}
        <br />
        <label>Linked In:</label>
        <input type="url" name="linkedin" onChange={handleChange} className="form-control" required placeholder="Linked URL" />
        <div style={{ fontSize: 8, color: "red" }}>{errors.linkedin}</div>{errors.linkedin && <h5>{errors.linkedin}</h5>}
        <br />
        <label>Github:</label>
        <input type="url" name="github" onChange={handleChange} className="form-control" required placeholder="Github URL" />{errors.github && <h5>{errors.github}</h5>}
        <br />
        {/*<input type="submit" value="Submit" />
        {/*<button type="submit" onClick={Submit}>SUBMIT</button>
        <button type="submit" onClick={() => navigate(-1)}>BACK</button>
        <br />
        <button type="submit" onClick={()=>{Submit(); shift();}}>NEXT</button>
        {/*<p>{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname},{initialValues.fname}</p>
      </form>
    </div>
  )
}

export default PersonalDetails;*/
