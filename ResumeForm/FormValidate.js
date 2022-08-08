import React, { useState, setState, callback } from 'react'
import { omit } from 'lodash'
//import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';

const FormValidate = () => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {


            case 'fname':
                if (value.length <= 4) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        fname: 'Name cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "fname");
                    setErrors(newObj);

                }
                break;

            case 'lname':
                if (value.length <= 4) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        lname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length >= 20) {
                    setErrors({
                        ...errors,
                        lname: 'Username should have maximum 20 letters'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        lname: 'Name cannot be blank'
                    })
                }
                else {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        lname: 'Username atleast have 5 letters'
                    })

                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "lname");
                    setErrors(newObj);

                }
                break;

            case 'email_id':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        email: 'email cannot be blank'
                    })
                }
                else {

                    let newObj = omit(errors, "email_id");
                    setErrors(newObj);

                }
                break;

            case "mobile":
                if (value.length < 10) {
                    setErrors({
                        ...errors,
                        mobile: 'mobile number should have atleast 10 digits'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        mobile: 'Name cannot be blank'
                    })
                }
                else if (value.length > 10) {
                    setErrors({
                        ...errors,
                        mobile: 'mobile no is greater than 10'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "mobile");
                    setErrors(newObj);

                }
                break;

            case 'linkedin':
                if (
                    !new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm).test(value)
                ) {
                    setErrors({
                        ...errors,
                        linkedin: 'Enter a valid linkedin url'
                    })
                }
                else if (value.length == 0) {
                    setErrors({
                        ...errors,
                        linkedin: 'Name cannot be blank'
                    })
                } else {

                    let newObj = omit(errors, "linkedin");
                    setErrors(newObj);

                }
                break;


            case 'umarks':
                if (!new RegExp([0 - 9]).test(value)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: "enter valid marks"
                    })
                }
                else if (value.length == 0) {
                    setErrors({
                        ...errors,
                        fname: 'marks cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "umarks");
                    setErrors(newObj);

                }
                break;


            case 'cmarks':
                if (!new RegExp([0 - 9]).test(value)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: "enter valid marks"
                    })
                }
                else if (value.length == 0) {
                    setErrors({
                        ...errors,
                        fname: 'marks cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "cmarks");
                    setErrors(newObj);

                }
                break;

            case 'smarks':
                if (!new RegExp([0 - 9]).test(value)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: "enter valid marks"
                    })
                }
                else if (value.length == 0) {
                    setErrors({
                        ...errors,
                        fname: 'marks cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "smarks");
                    setErrors(newObj);

                }
                break;
            case 'uname':
                if (value) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length == 0) {
                    setErrors({
                        ...errors,
                        fname: 'Name cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "fname");
                    setErrors(newObj);

                }
                break;

            case 'link1':
                if (!new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        fname: 'Name cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "link1");
                    setErrors(newObj);

                }
                break;
            case 'link2':
                if (!new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        fname: 'Name cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "link2");
                    setErrors(newObj);

                }
                break;
            case 'link3':
                if (!new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        fname: 'Username atleast have 5 letters'
                    })
                }
                else if (value.length === 0) {
                    setErrors({
                        ...errors,
                        fname: 'Name cannot be blank'
                    })
                }
                else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "link3");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }



    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;
        console.log(name, val)
        validate(event, name, val);
        //const isCheckbox = event.target.type === "checkbox";
        //setState({
        // [event.target.name]: isCheckbox 
        //? event.target.checked 
        //: event.target.value 
        //}); 
        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        })

    }


    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            navigate(-1)

        } else {
            alert("There is an Error!");
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default FormValidate;