import React,{useState} from "react";
import loginPicture from "../../Component/Images/loginPicture.svg";
import Button from "../../Component/Button";
import styled from 'styled-components'
import './sass/Signin.css'
import {ToastContainer, toast } from "react-toastify";

const FormDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
h3{
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 27px;
line-height: 33px;
color: #00302E;
margin-bottom: 2em;
};

p{
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  margin-top: 20px;
  text-align: center;
  color: rgba(0, 48, 46, 0.91);
};
button{
  width: 488px;
height: 60px;
left: 848px;
top: 636px;

background: #00302E;
border-radius: 5px;
width: 488px;
height: 60px;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #FBDDBB;
`
const InputFormDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
  background: rgba(255, 255, 255, 0.83);
border: 1px solid rgba(251, 221, 187, 0.51);
border-radius: 5px;
color: rgba(0, 48, 46, 0.91);
width: 488px;
height: 71px;
padding: 20px;
font-weight: 400;
font-size: 14px;
line-height: 33px;
margin-bottom: 20px
}


}

`

const Signin = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ""
    })
    const [passwordType, setpasswordType] = useState("password");
    const [passwordinputType, setpasswordInputType] = useState("");
    const handlepassword = (e) => {
      setpasswordInputType(e.target.value);
    };
    const togglePassword = (e) => {
      e.preventDefault();
      if (passwordType === "password") {
        setpasswordType("text");
        return;
      }
      setpasswordType("password");
    };


    const handleChange = (e) => {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
      })
    }

    console.log(loginData)

   const handleSubmit =(e) => {
     e.preventDefault()
     let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    console.log(loginData)
     if (loginData?.email == user?.email && loginData?.password == user?.password){
       toast.success("Login Successful")
       setInterval(() => {
        window.location='/dashboard'
       }, 2000);
       
     }else{
       toast.error("Wrong email or password")
     }

   }

 

  return (
    
    <div className="login">
       <ToastContainer />
      <div>
        <img src={loginPicture} alt="loginpicture" />
      </div>
      <FormDiv>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
        <InputFormDiv>
            <input type="email" placeholder="Your Email address" name='email' onChange={handleChange} /> <br />
            <span >
              <input   
              placeholder="Your Password" 
              type='password'
              onChange={handleChange}
              name="password"
              />
              {/* <button className="btnShow" onClick={togglePassword} >show</button> */}
            </span>{" "}
            <br />
            <Button props={"LOGIN"} />
          </InputFormDiv>
        </form>
      </FormDiv>
    </div>
  );
};

export default Signin;
