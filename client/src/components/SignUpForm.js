import React,{ useState,useContext } from "react";
import styles from "./SignUpForm.module.css"
import { Context } from "../store/auth-context"

// import App from "./App.js"

function SignUpForm () {
const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
const {user,setUser} = useContext(Context);
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
.then((r)=> r.json())
.then((data)=> setUser(data))
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
  </form>

   
  
)
    
}

export default SignUpForm;