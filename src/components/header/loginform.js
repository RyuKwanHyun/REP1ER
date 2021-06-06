// import React, { useState } from "react";
// import "./loginform.css";
// import { useSpring, animated } from "react-spring";
// import {Link} from 'react-router-dom';

// function Sign_up() {
//   const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  
//   const [email, setEmail] = useState(null);

//   const loginProps = useSpring({
//     left: registrationFormStatus ? -500 : 0, // Login form sliding positions
//   });
//   const registerProps = useSpring({
//     left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
//   });

//   const loginBtnProps = useSpring({
//     borderBottom: registrationFormStatus
//       ? "solid 0px transparent"
//       : "solid 2px #1059FF",  //Animate bottom border of login button
//   });
//   const registerBtnProps = useSpring({
//     borderBottom: registrationFormStatus
//       ? "solid 2px #1059FF"
//       : "solid 0px transparent", //Animate bottom border of register button
//   });

//   function registerClicked() {
//     setRegistartionFormStatus(true);
//   }
//   function loginClicked() {
//     setRegistartionFormStatus(false);
//   }

//   return (
//     <>
//       <div className="login">
//         <div className="login_background">
//           <div className="login-register-wrapper">
//             <div className="nav-buttons">
//               <animated.button
//                 onClick={loginClicked}
//                 id="loginBtn"
//                 style={loginBtnProps}
//               >
//                 Login
//         </animated.button>
//               <animated.button
//                 onClick={registerClicked}
//                 id="registerBtn"
//                 style={registerBtnProps}
//               >
//                 Register
//         </animated.button>
//             </div>
//             <div className="form-group">
//               <animated.form action="" id="loginform" style={loginProps}>
//                 <LoginForm />
//               </animated.form>
//               <animated.form action="" id="registerform" style={registerProps}>
//                 <RegisterForm />
//               </animated.form>
//             </div>
//             <animated.div className="forgot-panel" style={loginProps}>
//               <Link to="/">Forgot your password</Link>
//             </animated.div>
//           </div>``
//         </div>
//       </div>
//     </>
//   );
// }

// function LoginForm() {
//   return (
//     <React.Fragment>
//       <label for="id">ID</label>
//       <input type="text" id="id" />
//       <label for="password">PASSWORD</label>
//       <input type="text" id="password" />
//       <input type="submit" value="submit" className="submit" />
//     </React.Fragment>
//   );
// }

// function RegisterForm() {
//   return (
//     <React.Fragment>
//       <label for="id">ID</label>
//       <input type="text" id="id" />
//       <label for="password">password</label>
//       <input type="password" id="password" />
//       <label for="confirmpassword">confirm password</label>
//       <input type="text" id="confirmpassword" />
//       <label for="firstname">first name</label>
//       <input type="text" id="firstname" />
//       <label for="lastname">last name</label>
//       <input type="text" id="lastname" />
//       <label for="email">e-mail address</label>
//       <input type="text" id="email" />
//       <label for="hp">telephone</label>
//       <input type="number" id="hp" />
//       <label for="ad">Do you agree to the advertisement?
//       <input type="radio" id="email" />yes
//       <input type="radio" id="email" />no
//       </label>
      
//       <input type="submit" value="submit" className="submit" />
//     </React.Fragment>
//   );
// }

// export default Sign_up;