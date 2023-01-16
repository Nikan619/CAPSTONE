import React, { useState } from 'react';

const LoginForm = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Invalid password');
      })
      .then((data) => {
        setUser(data)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input
        type="text"
        id="username"
        placeholder='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit" className='login-button'>Login</button>
    </form>
  );
};

export default LoginForm;
