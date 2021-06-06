import React,  {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({click}) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [token, setToken] = useState('');
    const [redirectFlag, setRedirectFlag] = useState(false);
    useEffect(() => {
        const postUser = () => {
            try {
                axios.post(
                    '/api/v1/members/login', {
                        name : name,
                        password : password
                    }
                ).then((response) => {
                    const { accessToken } = response.data;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    console.log(response.data);
                    setToken(response.data);
                    localStorage.setItem("name", name);
                    // setLoginFlag(response.data.loginFlag);
                });
            } catch(err) {
                console.log(err);
            }
        }
        postUser();
    });

    const onSubmitHandler = (e) => {

        e.preventDefault();

        if(token) {

            console.log("Login Successful");
            alert("Login Successful !!!");
            click = true;
            setRedirectFlag(true);
            window.location.reload();
            window.location.replace("/");
        } else {

            console.log("Login Failed");
            alert("Failed to login ( Please check again )");
            setEmail("");
            setPassword("");
        }
    };

    const onChangeName = (e) => {

        setName(e.target.value);
    }

    const onChangePassword = (e) => {

        setPassword(e.target.value);
    }

    return (
        <div className = "login_main">
            <div className = "login_body">
                <div className = "login_main_holder">
                    <div className = "login_title">
                    <h1 >Login</h1>
                    </div>
                    
                    <div className = "signin_error_msg_holder">
                    <p className = "signin_error_msg">Invalid username <span className = "error_msg_second_line">and/or password</span></p>
                    </div>
                    
                    <form className = "signin_form" onSubmit = {onSubmitHandler}>
                        <input type = "text" name = "name" id = "userName_field" value = {name} onChange = {onChangeName}
                            className = "signin_form_field" placeholder="Email"></input>

                        <input type = "password" name = "password" id = "password_field" value = {password} onChange = {onChangePassword}
                            className = "signin_form_field" placeholder="Password"></input>

                        <button className = "signin_submit_button" type = "submit">Sign In</button>
                        {redirectFlag && (<Redirect to = "/"></Redirect>)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;