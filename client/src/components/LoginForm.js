import React, { useState,useContext} from 'react';
import styles from "./LoginForm.module.css"
import {Context} from "../store/auth-context"



const LoginForm = () => {

  const {setUser,fetchLogin} = useContext(Context)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch('/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Invalid password');
  //     })
  //     .then((data) => {
  //       setUser(data)
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLogin(username, password,setError)}

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
      className={styles.input}
        type="text"
        id="username"
        placeholder='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <input
      className={styles.input}
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button  type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
