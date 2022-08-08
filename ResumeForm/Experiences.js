import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormValidate from "./FormValidate";
import { useLocation } from "react-router";
export const Experiences = () =>{
  //const [Institution_organisation, setInstitution_organisation] = useState("");
  //const [Position, setPosition] = useState("");
  //const [Duration, setDuration] = useState("");
  //const [Description, setDescription] = useState("");
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
    navigate("/ResumeForm/ConfirmPage",{state:{email:primarykey}})
  }
  async function Submit() {
    let item = initialValues
    console.warn(item);
    let result = await fetch("http://localhost:3000/updateExp", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if(result.status == 404){
      alert("Cannot update");
    }
    result = await result.json();
    console.warn("result", result);
  }
  return (
    <div className="mainexperience">

    <div className="subexperience">
    <div className="col-sm-8 offset-sm-0">
      <h1> Experience Details </h1>
      <h2> Experience 1 </h2>
      <br />
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inst1"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos1"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur1"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc1"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <h2> Experience 2 </h2>
      <input
        type="text"
        name="inst2"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos2"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur2"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc2"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <h2> Experience 3 </h2>
      <input
        type="text"
        name="inst3"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos3"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur3"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc3"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      {/*<div align="left">*/}
      <button type="submit" onClick={()=>navigate(-1)} >
        Back
      </button>
      <br/>
      <button type="submit" onClick={()=>{Submit(); Shift();}}>
        next
      </button>
      </form>
    </div>
    </div>
    </div>
  );
}
export default Experiences;



























/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormValidate from "./FormValidate";
import { useLocation } from "react-router";
export const Experiences = () =>{
  //const [Institution_organisation, setInstitution_organisation] = useState("");
  //const [Position, setPosition] = useState("");
  //const [Duration, setDuration] = useState("");
  //const [Description, setDescription] = useState("");
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
    navigate("/ResumeForm/ConfirmPage",{state:{email:primarykey}})
  }
  async function Submit() {
    let item = initialValues
    console.warn(item);
    let result = await fetch("http://localhost:3000/updateExp", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
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
      <h1> Experience Details </h1>
      <h2> Experience 1 </h2>
      <br />
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inst1"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos1"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur1"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc1"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <h2> Experience 2 </h2>
      <input
        type="text"
        name="inst2"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos2"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur2"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc2"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <h2> Experience 3 </h2>
      <input
        type="text"
        name="inst3"
        onChange={handleChange}
        className="form-control"
        placeholder="Institution/Organisation"
      />
      <br />
      <input
        type="text"
        name="pos3"
        onChange={handleChange}
        className="form-control"
        placeholder="Position"
      />
      <br />
      <input
        type="text"
        name="dur3"
        onChange={handleChange}
        className="form-control"
        placeholder="Duration "
      />
      <br />
      <input
        type="text"
        name="desc3"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <button type="submit" onClick={()=>navigate(-1)} >
        Back
      </button>
      <button type="submit" onClick={()=>{Submit(); Shift();}}>
        next
      </button>
      </form>
    </div>
  );
}
export default Experiences;*/