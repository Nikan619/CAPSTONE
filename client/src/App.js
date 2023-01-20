

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'
import HouseTrivia from './pages/HouseTrivia.js';
import { useEffect } from 'react';

import {useState} from 'react'
import Login from './pages/Login'
import HouseMemberDetails from './components/HouseMemberDetails.js';
import { BrowserRouter } from 'react-router-dom';
import Bills from "./pages/Bills.js"
import PartyAffiliation from './pages/PartyAffiliation.js';
import alanBtn from'@alan-ai/alan-sdk-web'

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
      <h1> Hello from APP</h1>
      <main>
        <Route exact path = "/"></Route>
        <Route path = "/affiliation">
           <PartyAffiliation user= {user} />
        </Route>
<Route path = "/senators" >
      <Congress  user={user}/>
      </Route>
      <Route path = "/house" >
        <HouseTrivia  user={user}/>
      </Route>
      <Route path = "/memberdetails">
        <HouseMemberDetails />
      </Route>
      <Route path = "/bills">
        <Bills/>
      </Route>
     
      </main>
    </div>
   
    
  );
}

export default App;
