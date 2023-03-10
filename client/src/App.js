

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'
import HouseTrivia from './pages/HouseTrivia.js';
import { useEffect } from 'react';
import {useContext} from "react"
import {useState} from 'react'
import Login from './pages/Login'

import { BrowserRouter } from 'react-router-dom';
import Bills from "./pages/Bills.js"
import PartyAffiliation from './pages/PartyAffiliation.js';
import alanBtn from'@alan-ai/alan-sdk-web'
import {Context} from './store/auth-context'
import CommitteesList from './components/CommitteesList.js'
import Error from "./pages/Error";
import StatementsList from "./components/StatementsList"
import NominationList from "./components/NominationList"
import SingleNomination from "./components/SingleNomination"
import {useParams} from "react-router-dom";
import {RouterContext} from 'react-router-dom'

const alanKey='b9494fbebd9a86bdd58468224e69996e2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {


  
  const {user,setUser,fetchMe}= useContext(Context)

// const [user, setUser] = useState(null);

useEffect(()=>{


fetchMe();

  alanBtn({
    key: alanKey,
    onCommand: ({command, articles}) =>{
      if(command ='newHeadlines'){
     console.log("hello motto");
      }

    }


  
  })

  
 
},[]);


if(!user) return<Login setUser={setUser} />



  return (
    
  
    <div className="App">
   
   <MainHeader />
  
      <main>
        <Route exact path = "/"></Route>
        <Route path = "/statements">
         <StatementsList />
        </Route>
        <Route path = "/affiliation">
           <PartyAffiliation user= {user} />
        </Route>
<Route path = "/senators" >
      <Congress  user={user}/>
      </Route>
      <Route path = "/house" >
        <HouseTrivia  user={user}/>
      </Route>
      <Route path = "/committees" >
      <CommitteesList />
      </Route>
      <Route path = "/NominationList" >
      <NominationList/>
      </Route>
    
      <Route path = "/bills">
        <Bills/>
      </Route>
      <Route path = "/nomination/:id">

      <SingleNomination />
      </Route>
      {/* <Route exact path ="*">
        <Error/>
      </Route> */}
      </main>
    </div>
   
    
  );
}

export default App;
