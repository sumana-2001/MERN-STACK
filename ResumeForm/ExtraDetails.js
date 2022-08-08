import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import FormValidate from './FormValidate'
export const ExtraDetails = () =>{
  //const [skill1, setskill1] = useState("");
  //const [skill2, setskill2] = useState("");
  //const [skill3, setSkill3] = useState("");
  //const [skill4, setskill4] = useState("");

  const checkForm = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const navigate = useNavigate();
  const location = useLocation();
  const {handleSubmit,handleChange, values, errors } = FormValidate(checkForm);
  const primarykey = location.state.email 
  console.log("primary key : ",primarykey)
  let initialValues = values;
  initialValues = {...initialValues,Email_id:primarykey}
  console.log("values:",initialValues) 
  
  function Shift(){
    navigate("/ResumeForm/Experiences",{state:{email:primarykey}})
  }

  async function Submit() {
    let item = initialValues
    console.warn(item);
    let result = await fetch("http://localhost:3000/updateSkills", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    if(result.status == 404){
      alert("Cannot update");
    }
    result = await result.json();
    console.warn("result", result);
  }
  return (
    <div className="mainskill">

    <div className="subskill">
    <div className="col-sm-8 offset-sm-0">
      <h1> Skills and languages </h1>
      <br />
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="skill1"
        onChange={handleChange}
        className="form-control"
        placeholder="programming Skill 1"
      />
      <br />
      <input
        type="text"
        name="skill2"
        onChange={handleChange}
        className="form-control"
        placeholder="developing Skill 2"
      />
      <br />
      <input
        name="skill3"
        onChange={handleChange}
        className="form-control"
        placeholder="leadership Skill 3 "
      />
      <br />
      <input
        type="text"
        name="skill4"
        onChange={handleChange}
        className="form-control"
        placeholder="general Skill 4"
      />
      <br />
      <br />
      <br />
      <button type="submit" onClick={()=>navigate(-1)}>
        Back
      </button>
      <br />
      <button type="submit" onClick={()=>{Submit(); Shift();}}>
        Next
      </button>
      </form>
    </div>
    </div>
    </div>
  );
}
export default ExtraDetails;























/*import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import FormValidate from './FormValidate'
export const ExtraDetails = () =>{
  //const [skill1, setskill1] = useState("");
  //const [skill2, setskill2] = useState("");
  //const [skill3, setSkill3] = useState("");
  //const [skill4, setskill4] = useState("");

  const checkForm = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const navigate = useNavigate();
  const location = useLocation();
  const {handleSubmit,handleChange, values, errors } = FormValidate(checkForm);
  const primarykey = location.state.email 
  console.log("primary key : ",primarykey)
  let initialValues = values;
  initialValues = {...initialValues,Email_id:primarykey}
  console.log("values:",initialValues) 
  
  function Shift(){
    navigate("/ResumeForm/Experiences",{state:{email:primarykey}})
  }

  async function Submit() {
    let item = initialValues
    console.warn(item);
    let result = await fetch("http://localhost:3000/updateSkills", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    if(result.status == 404){
      alert("Cannot update");
    }
    result = await result.json();
    console.warn("result", result);
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1> Skills and languages </h1>
      <br />
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="skill1"
        onChange={handleChange}
        className="form-control"
        placeholder="programming Skill 1"
      />
      <br />
      <input
        type="text"
        name="skill2"
        onChange={handleChange}
        className="form-control"
        placeholder="developing Skill 2"
      />
      <br />
      <input
        name="skill3"
        onChange={handleChange}
        className="form-control"
        placeholder="leadership Skill 3 "
      />
      <br />
      <input
        type="text"
        name="skill4"
        onChange={handleChange}
        className="form-control"
        placeholder="general Skill 4"
      />
      <br />
      <br />
      <br />
      <button type="submit" onClick={()=>navigate(-1)}>
        Back
      </button>
      <br />
      <button type="submit" onClick={()=>{Submit(); Shift();}}>
        Next
      </button>
      </form>
    </div>
  );
}
export default ExtraDetails;*/