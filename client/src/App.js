

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'
import HouseTrivia from './pages/HouseTrivia.js';
import { useEffect } from 'react';

import {useState} from 'react'
import Login from './pages/Login'



function App() {

const [user, setUser] = useState(null);

useEffect(()=>{
  fetch("/me").then((r)=>{
    if(r.ok){
      r.json().then((user)=> setUser(user))
    }
  });
},[]);


if(!user) return<Login setUser={setUser}/>

  return (
    <div className="App">
   <MainHeader user={user} setUser={setUser} />
      <h1> Hello</h1>
      <main>
        <Route exact path = "/"></Route>
<Route path = "/senators">
      <Congress />
      </Route>
      <Route path = "/house">
        <HouseTrivia />
      </Route>
      </main>
    </div>
  );
}

export default App;
