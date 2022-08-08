import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import FormValidate from './FormValidate'
import ProfilePage from "../ProfilePage";
export const ProjectsDeveloped = () => {
  //const [Title, setTitle] = useState("");
  //const [Link, setLink] = useState("");
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

  function shift(){
    navigate("/ResumeForm/ExtraDetails",{state:{email:primarykey}})
  }

  async function Submit() {
    let item = initialValues
    console.warn("item : ",item)
    let result = await fetch("http://localhost:3000/updateProj", {
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
    <div className="mainproject">

    <div className="subproject">
    <div className="col-sm-8 offset-sm-0">
      <h1> Projects Developed </h1>
      <form onSubmit={handleSubmit}>
      
      <h2> Project 1 </h2>
      <input
        type="text"
        name="title1"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link1"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description1"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <h2> Project 2 </h2>
      <input
        type="text"
        name="title2"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link2"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description2"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />

      <h2> Project 3 </h2>
      <input
        type="text"
        name="title3"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link3"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description3"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <button type="submit" onClick={()=>navigate(-1)}>
        Back
      </button>
      <br/>
      <button type="submit" onClick={()=>{Submit(); shift();}}>
        Next
      </button>
      </form>
    </div>
    </div>
    </div>
  );
}
export default ProjectsDeveloped;







































/*import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import FormValidate from './FormValidate'
import ProfilePage from "../ProfilePage";
export const ProjectsDeveloped = () => {
  //const [Title, setTitle] = useState("");
  //const [Link, setLink] = useState("");
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

  function shift(){
    navigate("/ResumeForm/ExtraDetails",{state:{email:primarykey}})
  }

  async function Submit() {
    let item = initialValues
    console.warn("item : ",item)
    let result = await fetch("http://localhost:3000/updateProj", {
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
      <h1> Projects Developed </h1>
      <form onSubmit={handleSubmit}>
      
      <h2> Project 1 </h2>
      <input
        type="text"
        name="title1"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link1"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description1"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <h2> Project 2 </h2>
      <input
        type="text"
        name="title2"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link2"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description2"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />

      <h2> Project 3 </h2>
      <input
        type="text"
        name="title3"
        onChange={handleChange}
        className="form-control"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="link3"
        onChange={handleChange}
        className="form-control"
        placeholder="Link"
      />
      <br />
      <input
        type="text"
        name="description3"
        onChange={handleChange}
        className="form-control"
        placeholder="Description"
      />
      <br />
      <br />
      <button type="submit" onClick={()=>navigate(-1)}>
        Back
      </button>
      <br/>
      <button type="submit" onClick={()=>{Submit(); shift();}}>
        Next
      </button>
      </form>
    </div>
  );
}
export default ProjectsDeveloped;*/