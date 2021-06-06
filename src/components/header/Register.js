import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import "./Register.css";
import axios from 'axios';


function RegisterForm() {


  const [signUpCheck, setSignUpCheck] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [phonenum1, setTel] = useState('');

  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (password !== passwordconfirm) {
      return setPasswordError(true);
    }
    // console.log({
    //   email,
    //   password,
    //   passwordconfirm,
    //   name,
    //   phonenum1
    // });

    userPost();
  };


  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePasswordConfirm = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordConfirm(e.target.value);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }


  const onChangePhoneNum1 = (e) => {
    setTel(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    userPost();
  }

  const userPost = () => {
    const postUser = async () => {
      try {

        await axios.post(
          '/api/v1/members/signup', {
          name: email,
          password: password
        }
        );



        console.log("Success");
        //history.pushState('/');
        setSignUpCheck(true);
      } catch (e) {
        console.log(e);
      }
    }

    postUser(

    );
  }

  return (
    <div className="register_main_body">
      <div className="register_title">
        Sign Up
      </div>
      <div className="register_form">
        <form className="signup_form" onSubmit={onSubmitHandler}>
          <legend><span className="base">!</span>Your basic info</legend>
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email" value={email} onChange={onChangeEmail}></input>

          <label for="password">Password:</label>
          <input type="password" id="password" name="user_password"
            value={password} onChange={onChangePassword}></input>

          <label for="passwordCheck">PasswordCheck:</label>
          <input type="password" id="passwordCheck" name="user_password_check"
            value={passwordconfirm} onChange={onChangePasswordConfirm}></input>

          <label for="name">Full Name:</label>
          <input type="text" id="name" name="user_name"
            value={name} onChange={onChangeName}></input>

          <label for="phonenum1">Telephone:</label>
          <input type="text" id="phonenum1" name="user_phone_num1"
            value={phonenum1} onChange={onChangePhoneNum1}></input>

          {/* <label for = "address">Address:</label>
                    <input type = "text" id = "address" name = "user_address" 
                    ></input> */}

          <button className="register_submit_button" type="submit" onClick={onSubmit}>Sign Up</button>
          {signUpCheck && (<Redirect to="/Login"></Redirect>)}

        </form>
      </div>
    </div>
  );
}

export default RegisterForm;