import { useState } from "react";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


function Login({ setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      
      {showLogin ? (
        <>
        <LoginForm setUser={setUser}/>
          <form setUser={setUser} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
        <SignUpForm setUser={setUser}/>
          <form setUser={setUser} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </>
  );
}


export default Login;