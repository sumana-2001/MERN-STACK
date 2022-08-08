import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import FormValidate from './FormValidate'
import ProfilePage from '../ProfilePage';
export const Educationaldetails = () => {
    const checkForm = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
    const navigate = useNavigate();
    const location = useLocation();
    const primarykey = location.state.email 
    //const primarykey = ProfilePage(); 
    console.log("primary key : ",primarykey)
    //const [isChecked, setIsChecked] = useState(false);
    //let initialValues = {pname:"",PYOF:new Date(),Pqualification:"",Pmarks:0,uname:"",UYOF:new Date(),Uqualification:"",Umarks:0,cname:"",CYOF:new Date(),Cqualification:"",Cmarks:0,sname:"",SYOF:new Date(),Squalification:"",Smarks:0};
    const {handleSubmit,handleChange, values, errors } = FormValidate(checkForm);
    let initialValues = values;
    initialValues = {...initialValues,Email_id:primarykey}
    console.log("values:",initialValues)
    async function Submit(){
      let item = initialValues
      console.warn("item : ",item)
      let result = await fetch("http://localhost:3000/updateEdu", {
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
    //const nodeList = document.body.childNodes;
    //var divroot = nodeList[3]
    //const divelements = document.getElementsByTagName("div")
    //const divsubroot = divelements[1]
    //var divfuncelem = divsubroot.id
    
    //console.log(document.getElementById("myCheck"))
    //console.log(checkbox.checked)

    function shift(){
      navigate("/ResumeForm/ProjectsDeveloped",{state:{email:primarykey}})
    }
    
    function myFun(id1,id2){
      const checkbox = document.getElementById(id1)
      const box = document.getElementById(id2)
    console.log(checkbox,box)
      console.log(checkbox.checked)
      if(checkbox.checked){
        box.style.display = "block";
      }
      else{
        box.style.display = "none";
      }
    }
  return (
    <div className="maineducational">
            <div className="subeducational">
        <div className="col-sm-10 offset-sm-0">
    <div className='educationaldetails'>
    <>
       <h1 className='heading'>Educational Details</h1>
        
        <div id="10thdetails" >
        {/*<input type="checkbox" id="myCheck1" onClick={myFun("myCheck1","10thdetails")}/>*/}
          <form onSubmit={handleSubmit}>
            <h1>CLASS X:</h1>
            <input type="text" name="sname" onChange={handleChange} className="form-control" required placeholder="Name of the school" />
            <div style={{ fontSize: 15, color: "red" }}>{errors.sname}</div>
            <br />
            <input type="Date" name="SYOF" onChange={handleChange} className="form-control" required placeholder="dd-mm-yyyy"/>
            <div style={{ fontSize: 15, color: "red" }}>{errors.SYOF}</div>
            <br />
            <input type="text" name="Squalification" onChange={handleChange} className="form-control" required placeholder='Board' />
            <div style={{ fontSize: 15, color: "red" }}>{errors.Squalification}</div>
            <br />
            <input type="text" name="Smarks" onChange={handleChange} className="form-control" required placeholder='Marks(CGPA/percentage)'/>
            <div style={{ fontSize: 15, color: "red" }}>{errors.Smarks}</div>
          </form>
          
        </div>
        
        <br></br>
        <br></br>
        <div id = "12thdetails">
        {/*<input type="checkbox" ref="myCheck2" id="myCheck2" onClick={myFun("myCheck2","12thdetails")}/>*/}
        <form onSubmit={handleSubmit}>
          <h1>CLASS XII:</h1>
          <input type="text" name="cname" onChange={handleChange} className="form-control" required placeholder='Name of college'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.cname}</div>
          <br />
          <input type="Date" name="CYOF" onChange={handleChange} className="form-control" required placeholder='Year of passing'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.CYOF}</div>
          <br />
          <input type="text" name="Cqualification" onChange={handleChange} className="form-control" required placeholder='Specialization'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.Cqualification}</div>
          <br />
          <input type="text" name="Cmarks" onChange={handleChange} className="form-control" required placeholder='Marks(CGPA/Percentage)'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.Cmarks}</div>
          <br />
          {/*<input type="submit" value="Submit" />*/}
        </form>
        </div>
        <br />
        <br />
        <br />
        
        <div id="ugdetails">
        {/*<input type="checkbox" ref="myCheck3" id="myCheck3" onClick={myFun("myCheck3","ugthdetails")}/>*/}
        <form onSubmit={handleSubmit}>
          <h1>UG DETAILS:</h1>
          <input type="text" name="uname" onChange={handleChange} className="form-control" required placeholder='Name of University/college' />
          <div style={{ fontSize: 15, color: "red" }}>{errors.uname}</div>
          <br />
          <input type="Date" name="UYOF" onChange={handleChange} className="form-control" required placeholder='Year of passing'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.UYOF}</div>
          <br />
          <input type="text" name="Uqualification" onChange={handleChange} className="form-control" required placeholder='Specialization ' />
          <div style={{ fontSize: 15, color: "red" }}>{errors.Uqualification}</div>
          <br />
          <input type="text" name="Umarks" onChange={handleChange} className="form-control" required placeholder='Marks(CGPA/Percentage)'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.Umarks}</div>
          <br />
          {/*<input type="submit" value="Submit" />*/}

        </form>  

        
        </div>   

        <div id="pgdetails">
        {/*<input type="checkbox" ref="myCheck3" id="myCheck3" onClick={myFun("myCheck3","ugthdetails")}/>*/}
        <form onSubmit={handleSubmit}>
          <h1>PG DETAILS:</h1>
          <input type="text" name="pname" onChange={handleChange} className="form-control" required placeholder='Name of University/college'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.pname}</div>
          <br />
          <input type="Date" name="PYOF" onChange={handleChange} className="form-control" required placeholder='Year of passing'/>
          <div style={{ fontSize: 15, color: "red" }}>{errors.PYOF}</div>
          <br />
          <input type="text" name="Uqualification" onChange={handleChange} className="form-control" required placeholder='Specialization' />
          <div style={{ fontSize: 15, color: "red" }}>{errors.Pqualification}</div>
          <br />
          <input type="text" name="Pmarks" onChange={handleChange} className="form-control" required placeholder='Marks(CGPA/Percentage) '/>
          <div style={{ fontSize: 8, color: "red" }}>{errors.Pmarks}</div>
          <br />
          {/*<input type="submit" value="Submit" />*/}

        </form>  
        </div>
        <button className='button' type="submit" onClick={() => navigate(-1)}>BACK</button>
        <button className='button' type="submit" onClick={()=>{Submit(); shift();}}>NEXT</button>
        {/*<input type="submit" value="Submit" />*/}
      </>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Educationaldetails;







































/*import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import FormValidate from './FormValidate'
import ProfilePage from '../ProfilePage';
export const Educationaldetails = () => {
    const checkForm = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
    const navigate = useNavigate();
    const location = useLocation();
    const primarykey = location.state.email 
    //const primarykey = ProfilePage(); 
    console.log("primary key : ",primarykey)
    //const [isChecked, setIsChecked] = useState(false);
    //let initialValues = {pname:"",PYOF:new Date(),Pqualification:"",Pmarks:0,uname:"",UYOF:new Date(),Uqualification:"",Umarks:0,cname:"",CYOF:new Date(),Cqualification:"",Cmarks:0,sname:"",SYOF:new Date(),Squalification:"",Smarks:0};
    const {handleSubmit,handleChange, values, errors } = FormValidate(checkForm);
    let initialValues = values;
    initialValues = {...initialValues,Email_id:primarykey}
    console.log("values:",initialValues)
    async function Submit(){
      let item = initialValues
      console.warn("item : ",item)
      let result = await fetch("http://localhost:3000/updateEdu", {
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
    //const nodeList = document.body.childNodes;
    //var divroot = nodeList[3]
    //const divelements = document.getElementsByTagName("div")
    //const divsubroot = divelements[1]
    //var divfuncelem = divsubroot.id
    
    //console.log(document.getElementById("myCheck"))
    //console.log(checkbox.checked)

    function shift(){
      navigate("/ResumeForm/ProjectsDeveloped",{state:{email:primarykey}})
    }
    
    function myFun(id1,id2){
      const checkbox = document.getElementById(id1)
      const box = document.getElementById(id2)
    console.log(checkbox,box)
      console.log(checkbox.checked)
      if(checkbox.checked){
        box.style.display = "block";
      }
      else{
        box.style.display = "none";
      }
    }
  return (
    <>
       <h1>Educationaldetails</h1>
          
    

        <br /><br /><br />
        
        <div id="10thdetails" >
        {/*<input type="checkbox" id="myCheck1" onClick={myFun("myCheck1","10thdetails")}/>
          <form onSubmit={handleSubmit}>
            <h1>CLASS X:</h1>
            <label>name of school      </label>
            <input type="text" name="sname" onChange={handleChange} className="form-control" required />
            <div style={{ fontSize: 8, color: "red" }}>{errors.sname}</div>{errors.sname && <h5>{errors.sname}</h5>}

            <br />
            <label>Year of passing          </label>
            <input type="Date" name="SYOF" onChange={handleChange} className="form-control" required />
            <div style={{ fontSize: 8, color: "red" }}>{errors.SYOF}</div>{errors.SYOF && <h5>{errors.SYOF}</h5>}

            <br />
            <label>qualification            </label>
            <input type="text" name="Squalification" onChange={handleChange} className="form-control" required />
            <div style={{ fontSize: 8, color: "red" }}>{errors.Squalification}</div>{errors.Squalification && <h5>{errors.Squalification}</h5>}

            <br />
            <label>Marks(CGPA/percentage)   </label>
            <input type="text" name="Smarks" onChange={handleChange} className="form-control" required />
            <div style={{ fontSize: 8, color: "red" }}>{errors.Smarks}</div>{errors.Smarks && <h5>{errors.Smarks}</h5>}
          </form>
          
        </div>
        
        
        <div id = "12thdetails">
        {/*<input type="checkbox" ref="myCheck2" id="myCheck2" onClick={myFun("myCheck2","12thdetails")}/>
        <form onSubmit={handleSubmit}>
          <h1>CLASS XII:</h1>
          <label>name of college        </label>
          <input type="text" name="cname" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.cname}</div>{errors.cname && <h5>{errors.cname}</h5>}
          <br />
          <label>Year of passing        </label>
          <input type="Date" name="CYOF" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.CYOF}</div>{errors.CYOF && <h5>{errors.CYOF}</h5>}
          <br />
          <label>qualification          </label>
          <input type="text" name="Cqualification" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Cqualification}</div>{errors.Cqualification && <h5>{errors.Cqualification}</h5>}
          <br />
          <label>Marks(CGPA/Percentage) </label>
          <input type="text" name="Cmarks" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Cmarks}</div>{errors.Cmarks && <h5>{errors.Cmarks}</h5>}
          <br />
          {/*<input type="submit" value="Submit" />
        </form>
        
        </div>

        <br />
        <br />
        <br />
        
        <div id="ugdetails">
        {/*<input type="checkbox" ref="myCheck3" id="myCheck3" onClick={myFun("myCheck3","ugthdetails")}/>
        <form onSubmit={handleSubmit}>
          <h1>UNIVERSITY DETAILS:</h1>

          <label>name of University/college </label>
          <input type="text" name="uname" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.uname}</div>{errors.uname && <h5>{errors.uname}</h5>}


          <br />
          <label>Year of passing            </label>
          <input type="Date" name="UYOF" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.UYOF}</div>{errors.UYOF && <h5>{errors.UYOF}</h5>}
          <br />
          <label>qualification   </label>
          <input type="text" name="Uqualification" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Uqualification}</div>{errors.Uqualification && <h5>{errors.Uqualification}</h5>}
          <br />
          <label>Marks(CGPA/Percentage)     </label>
          <input type="text" name="Umarks" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Umarks}</div>{errors.Umarks && <h5>{errors.Umarks}</h5>}
          <br />
          {/*<input type="submit" value="Submit" />

        </form>  

        
        </div>   

        <div id="pgdetails">
        {/*<input type="checkbox" ref="myCheck3" id="myCheck3" onClick={myFun("myCheck3","ugthdetails")}/>
        <form onSubmit={handleSubmit}>
          <h1>UNIVERSITY DETAILS:</h1>

          <label>name of University/college </label>
          <input type="text" name="pname" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.pname}</div>{errors.pname && <h5>{errors.pname}</h5>}


          <br />
          <label>Year of passing            </label>
          <input type="Date" name="PYOF" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.PYOF}</div>{errors.PYOF && <h5>{errors.PYOF}</h5>}
          <br />
          <label>qualification   </label>
          <input type="text" name="Uqualification" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Pqualification}</div>{errors.Pqualification && <h5>{errors.Pqualification}</h5>}
          <br />
          <label>Marks(CGPA/Percentage)     </label>
          <input type="text" name="Pmarks" onChange={handleChange} className="form-control" required />
          <div style={{ fontSize: 8, color: "red" }}>{errors.Pmarks}</div>{errors.Pmarks && <h5>{errors.Pmarks}</h5>}
          <br />
          {/*<input type="submit" value="Submit" />

        </form>  
        </div>
        <button type="submit" onClick={() => navigate(-1)}>BACK</button>
        <br />
        <button type="submit" onClick={()=>{Submit(); shift();}}>NEXT</button>
        {/*<input type="submit" value="Submit" />

      </>
  )
}

export default Educationaldetails;*/