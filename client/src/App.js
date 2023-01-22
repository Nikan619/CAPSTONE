

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'
import HouseTrivia from './pages/HouseTrivia.js';
import { useEffect } from 'react';
import {useContext} from "react"
import {useState} from 'react'
import Login from './pages/Login'
import {useNavigate} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Bills from "./pages/Bills.js"
import PartyAffiliation from './pages/PartyAffiliation.js';
import alanBtn from'@alan-ai/alan-sdk-web'
import {Context} from './store/auth-context'
import Statements from './components/Statements'

const alanKey='b9494fbebd9a86bdd58468224e69996e2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  const navigate = useNavigate()
  
  const {user,setUser,fetchMe}= useContext(Context)

// const [user, setUser] = useState(null);

useEffect(()=>{


  alanBtn({
    key: alanKey,
    onCommand: ({command, articles}) =>{
      if(command ='newHeadlines'){
       navigate('/affiliation')
      }

    }
  })

  
 
},[]);


if(!user) return<Login setUser={user} />



  return (
    
  
    <div className="App">
   
   <MainHeader />
  
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
      <Route path = "/statements" >
      <Statements user={user}/>
      </Route>
    
      <Route path = "/bills">
        <Bills/>
      </Route>
     
      </main>
    </div>
   
    
  );
}

export default App;
