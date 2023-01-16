import React,{ useState } from "react";
// import App from "./App.js"

function SignUpForm ({ setUser }) {
const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
const [passwordConfirmation,setPasswordConfirmation] = useState("");
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

  <form onSubmit={handleSubmit} className='new-account-form'>
    <input
     type="text"
     placeholder="Enter a Username"
    value={username}
     onChange={(e) => setUsername(e.target.value)}
  />
  <br></br>
  <input
     type="password"
     placeholder="Enter a Password"
    value={password}
     onChange={(e) => setPassword(e.target.value)}
  />

  <br></br>
   <button type="submit">Create Account</button>
  </form>

   
  
)
    
}

export default SignUpForm;