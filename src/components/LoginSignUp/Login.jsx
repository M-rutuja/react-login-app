import React, { useState } from 'react'
import './Login.css';
import emailIcon from '../../assets/email.png'
import smartkey from '../../assets/smart-key.png'
import userIcon from '../../assets/user.png'

// import welcomeIMg from './assets/welcomeIMg.jpeg'

const Login = () => {
    const [action,setAction] = useState("Login");
    const [name,setName] = useState("");
    const[emailID,setEmailID] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");

    const handleSumbit = () => {
        const storedUsers = JSON.parse(localStorage.getItem("user")) || [];

        if(action === 'Sign Up'){
            if(!name || !emailID || !password){
                setErrorMsg("Please Fill all the fields");
                return;
            }

            const userExist = storedUsers.some(user => user.emailID === emailID);

            if(userExist){
                setErrorMsg("Email is already register.Please Login.")
                return;
            }

            const newUser = {
                name,
                emailID,
                password
            }
            
            localStorage.setItem("user",JSON.stringify([...storedUsers,newUser]));
            setErrorMsg("Sign up Successfully! please Login.");
            setAction("Login");
            setName("");
            setEmailID("");
            setPassword("");
        } else {
            const userFound = storedUsers.find(user => user.emailID === emailID && user.password === password);


            if(!userFound){
                setErrorMsg("Invalid email or password!");
            }else {
                setErrorMsg("Login Successfully!")
            }
        }
    }


    return (
        <div className='LoginContainer'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action==="Login"?null :<div className='input'>
                    <img src={userIcon} alt='' />
                    <input type="text"  placeholder='Enter Name' value ={name} onChange={(e) => setName(e.target.value)}/>
                </div>}

                

                <div className='input'>
                    <img src={emailIcon} alt='' />
                    <input type="email" value={emailID} placeholder='Enter Email ID' onChange={(e) => setEmailID(e.target.value)} />
                </div>

                <div className='input'>
                    <img src={smartkey} alt='' />
                    <input type="password"  placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>

            {errorMsg && <p className='Error-Message'>{errorMsg}</p>}

            {action==="Sign Up"? <div className='Already-account'>Already have an account? please Login!</div>:<div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>}
            

            <div className='submit-button'>
                <button onClick={handleSumbit}>
                    {action === "Login" ? "Login" : "Sign Up"}
                </button>
            </div>

            <div className='submit-cotainer'>
                <div className={action==='Login'?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>

                <div className={action=== "Sign Up"? "submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>

            


            

        </div>
    );
}

export default Login
