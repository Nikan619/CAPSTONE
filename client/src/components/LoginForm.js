import React, { useState, useEffect,useContext} from 'react';
import styles from "./LoginForm.module.css"
import {Context} from "../store/auth-context"



const LoginForm = () => {

  const {setUser,fetchLogin} = useContext(Context)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const image4 ="http://clipart-library.com/img/1472236.jpg"
  const image3= "https://www.liveabout.com/thmb/5ICZzjSjX0dTLlKVFa9FfbNPPOg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/obama-destroy-america-58b8d0a35f9b58af5c8e2599."
  const image2= "https://cloudfront-us-east-1.images.arcpublishing.com/tbt/M4DL5QGCABHDTESXBLVGUVG42I.jpg"
  const image1= "https://media.npr.org/assets/img/2013/01/18/stantis-09inauguration_custom-a3f55f19aa01291422d0bb39186a33591b79f50a.jpg"


  const [imagesPosition, setImagesPosition]= useState([
    {x: 0, y:0},
    {x:50, y:50},
    {x:100,y:100},
    {x:150,y:150}

  ])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagesPosition(prevImagesPosition => prevImagesPosition.map((image) => {
        const angle = Date.now() / 1000;
        return {
          x: image.x + Math.cos(angle) * 10,
          y: image.y + Math.sin(angle) * 10
        }
      }))
    }, 100);
    return () => clearInterval(intervalId);
  }, []);


  




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
    <>
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
<div>
    {imagesPosition.map((image,index)=>{
  <img
key={index}
src={[image1, image2, image3,image4][index]}
style={{
  position: "absolute",
  left: image.x,
  top: image.y
}}/>
    })}
</div>


</>




  );
};

export default LoginForm;
