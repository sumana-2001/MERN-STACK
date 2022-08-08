import { useState, useEffect,navigation } from "react";
import React from 'react';
import { useLocation } from "react-router";
//import navigation from 'react-dom'
import { useNavigate } from "react-router-dom";
import  ProfilePage  from "./ProfilePage";
export function Login() {
    const initialValues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [auth,setauth] = useState(0);
    const { state } = useLocation();
    //const {navigate1} = this.props.navigation;
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
     

    async function signIn(){
        let item={formValues}
        console.warn(item)
        try{
        let result= await fetch("http://localhost:3000/login",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        //console.log(result.error);
        if(result.status == 404){
            alert("INVALID USERNAME OR PASSWORD") 
            navigate("/login")
        }
        else{
        //console.log(result)
        //localStorage.setItem("user-info",JSON.stringify(result));
        console.warn("result",result);
        console.log(formValues);
        console.log("in login: ",formValues);
        //setauth = 1
        navigate("/profilepage",{state: {email:formValues.email}})
        }
    }catch (err) {
        console.error('err', err);
      }
    }



    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email){
            errors.email = "Email is required !"
        }   else if (!regex.test(values.email)){
            errors.email = "This is an invalid email !"
        }
        if (!values.password){
            errors.password = "Password is required !"
        }   else if (values.password.length < 6){
            errors.password = "Password must be atleast 6 characters !"
        }
        return errors
    }

    return (
        <><div className="mainr">
        <div className="subr">
    <div className="col-sm-10 offset-sm-0">


        <form onSubmit={handleSubmit}>

            <h3>Log in</h3>
            <div className="form-group">

                <input type="email" name="email" className="form-control" placeholder="Email ID" value={formValues.email} onChange={handleChange} placeholder="Email Id" />
                <p>{formErrors.email}</p>
            </div>

            <div className="form-group">

                <input type="password" name="password" className="form-control" placeholder="Password" value={formValues.password} onChange={handleChange} placeholder="Password" />
                <p>{formErrors.password}</p>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={signIn}>Sign in</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <p className="forgot-password text-right">
                <a href="/register">Forgot password?</a>
            </p>
        </form></div></div></div></>
    );

}
export default Login;
{/*import React, {useRef,useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Login()
{
    const userRef = useRef();
    const errRef = useRef();
    const[Email_ID,setEmail_ID]=useState("")
    const[Password,setPassword]=useState("")
    const [errMsg,seterrMsg] = useState("");
    const [success,setSuccess] = useState(false);
    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        seterrMsg('');
    },[Email_ID,Password])
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(Email_ID,Password);
        setEmail_ID('');
        setPassword('');
        setSuccess('true');
        }


    const navigate = useNavigate(); 
    async function signIn(){
        let item={Email_ID,Password}
        console.warn(item)
        try{
        let result= await fetch("http://localhost:3000/login/"+Email_ID+"/"+Password,{
            method:'GET',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            //body:JSON.stringify(item)
        });
        console.log(result);
        if(result.body=="false"){
            console.log("invaild") 
            navigate("/")
        }
        console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result));
        console.warn("result",result)
        navigate("/profilepage")
        //result = json.parse(result)
    }catch (err) {
        console.error('err', err);
      }
    }
    return (
        <div className="col-sm-6 offset-sm-3">
        <h1> Login Page </h1>
        <input type="text" ref={userRef} autoComplete="off" value={Email_ID} required onChange={(e)=>setEmail_ID(e.target.value)} className="form-control" placeholder="EmailID"/>
        <br/>
        <input type="password" ref={userRef} value={Password} required onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
        <br/>
        <button onClick={signIn} className="btn btn-primary">Login</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <p>Need an account? please click above link to register</p>
           <a href="/register">register</a>
        </div>  
    )
}
export default Login;













{/*import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const loginId = useRef(null);
    const password = useRef(null);
    const login = () => {
        let currentLoginId = loginId.current.value;
        let currentpassword = password.current.value;

        console.log(currentpassword);
        if (currentLoginId === 'ADMIN' && currentpassword === 'ADMIN') {
            alert('Login Sucessss');
        } else {
            alert('Login Failure..')
        } 

    }

   return (
    <div>
        <head>Hello user</head>
        <fieldset method="post">
            <legend>Login Form</legend>
            <input type="text" ref = {loginId} placeholder = "Login Id"/><br/>
            <input type="password" ref = {password} placeholder = "password"/><br/>
            <button color = "primary" onClick ={login}>Login </button>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </fieldset>
    </div>
    )
}
export default Login;*/}