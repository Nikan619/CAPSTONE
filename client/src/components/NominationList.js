import React from 'react';
import { Context } from "../store/auth-context"
import Loading from "./Loading"
import {useEffect} from "react"
import {useContext} from "react"
import Nomination from './Nomination';

import InputFormNomination from './InputFormNomination';
const NominationsList = ()=>{


const {nominations,loading}= useContext(Context);




if(loading){
    return <Loading/>
}
if(nominations.length<1){
    <h2 className="section-title">No statements matched your search criteria</h2>
}

    return(
        <>
<InputFormNomination />
<section className = "section">
    <h2 className= "section-title">nominations</h2>

   <div className="cocktails-center">
    {nominations.map((s)=>{
        
       return <Nomination key ={s.id} status={s.status} uri={s.uri} description={s.description} organization={s.organization} title={s.title} id ={s.id} name={s.name}/>
    })}

   </div>
</section>
</>





    )
}

export default NominationsList