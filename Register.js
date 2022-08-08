import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
function Register()
{
    const[First_Name,setFirst_Name]=useState("")
    const[Last_Name,setLast_Name]=useState("")
    const[Email_ID,setEmail_ID]=useState("")
    const[MobileNo,setMobileNo]=useState("")
    const[Password,setPassword]=useState("")
    const[Confirm_Password,setConfirm_Password]=useState("")
    const navigate = useNavigate();
    async function signUp(){
        let item={First_Name,Last_Name,Email_ID,MobileNo,Password,Confirm_Password}
        console.warn(item)
        let result= await fetch("http://localhost:3000/register" ,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }

        })
        if(result.status == 404){
            alert("ALREADY HAVE SAME REGISTRATION ID");
        }
        result = await result.json()
        console.warn("result",result)
        navigate("/login")
    }
    return (
        <div className="mainr">
        <div className="subr">
        <div className="col-sm-6 offset-sm-3">
        <h1> Registration Page </h1>
        <input type="text" value={First_Name} onChange={(e)=>setFirst_Name(e.target.value)} className="form-control" placeholder="First Name"/>
        <br/>
        <input type="text" value={Last_Name} onChange={(e)=>setLast_Name(e.target.value)}className="form-control" placeholder="Last Name"/>
        <br/>
        <input type="text" value={Email_ID} onChange={(e)=>setEmail_ID(e.target.value)} className="form-control" placeholder="EmailID"/>
        <br/>
        <input type="text" value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)}className="form-control" placeholder="Mobile Number"/>
        <br/>
        <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
        <br/>
        <input type="password" value={Confirm_Password} onChange={(e)=>setConfirm_Password(e.target.value)}className="form-control" placeholder="Confirm Password"/>
        <br/>
        <button onClick={signUp} className="btn btn-primary">Register</button>
        <button onClick={() => navigate("/")}>Go Back</button>
        </div> </div></div>
    )
}
export default Register;


























{/*import React, {setState,useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Register(props) {
  const navigate = useNavigate();
  const [User,setUser] = useState({
      FirstName: "",LastName: "",EmailId:"",MobileNo:"",
      Password:"",ConfirmPassword:""});
  let name,value;
  const handleInputs = (e) =>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...User,[name]:value});
  }

  const PostData = async(e) =>{
      e.preventDefault();
      const {FirstName,LastName,EmailId,MobileNo,Password,ConfirmPassword} = User;
      const res = await fetch("/register",{
          method: "POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              FirstName,LastName,EmailId,MobileNo,Password,ConfirmPassword 
          })
      });
      const data = await res.json();
      if(data.status === 422 || !data){
          window.alert("Invalid registration");
      }
      else{
          navigate("/");
      }
  }
  return(
      <div className="col-sm=6 offset-sm-3">
        <form method="POST">
            <label className="label">FirstName</label>
        <input className="form-control" onChange={handleInputs} 
          ref={User.FirstName} type="text" /> 
          <br/>

        <label className="label">LastName</label>
        <input className="form-control" onChange={handleInputs} 
          ref={User.LastName} type="text" />
        <br/>

<label className="label">Email Id</label>
        <input className="form-control" onChange={handleInputs} 
          ref={User.EmailId} type="text" />
        <br/>

<label className="label">Mobile No</label>
        <input className="form-control" onChange={handleInputs} 
          ref={User.MobileNo} type="text" />
        <br/> 

<label className="label">Password</label>
        <input className="form-control" onChange={handleInputs} 
          ref={User.Password} type="text" />
        <br/>

<label className="label">confirmPassword</label>
        <input className="form-control" ref={User.ConfirmPassword} type="text" onChange={handleInputs} 
           />
          <br/>
                {/*<div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={PostData}
                >
                    Register
                </button>
                <br/>
                <button onClick={() => navigate("/")}>Go Back</button>
            </form>
            </div>
    )
}

export default Register;*/}