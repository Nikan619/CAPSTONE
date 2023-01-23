import React,{ useState,useContext } from "react";
import styles from "./SignUpForm.module.css"
import { Context } from "../store/auth-context"

// import App from "./App.js"

function SignUpForm () {
const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
const {user,setUser} = useContext(Context);
const [errormessage,setErrormessage]= useState("")
// const [passwordConfirmation,setPasswordConfirmation] = useState("");
// console.log("hello from create");

function handleSubmit(e) {
  e.preventDefault();
  const user={
    username,
    password,
  }
  
  fetch("/signup",{

    method: "POST",
    headers: {"Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
.then((r)=> {
  if(r.status === 422){

   return r.json().then(errors=>{
    throw new Error(errors.message);
    
   });
  
  }
  return r.json();
})
.then((data)=> {
  setUser(data)
})
.catch(error=>{
  console.log(error)
  setErrormessage(error);
 console.log(errormessage);
})
}

return (

  <form className={styles.form} onSubmit={handleSubmit} >
    <input
    className={styles.input}
     type="text"
     placeholder="Enter a Username"
    value={username}
     onChange={(e) => setUsername(e.target.value)}
  />
  <br></br>
  <input 
  className={styles.input}
     type="password"
     placeholder="Enter a Password"
    value={password}
     onChange={(e) => setPassword(e.target.value)}
  />

  <br></br>
   <button className={styles.button} type="submit">Create Account</button>
   {errormessage && <p>Password must be 5 characters long</p> }
  
  </form>

 
)
    
}

export default SignUpForm;