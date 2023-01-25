
import {useState} from'react';


import React from 'react';
import { Context } from "../store/auth-context"
import Loading from "./Loading"
import {useEffect} from "react"
import {useContext} from "react"


import CommitteeInputsearch from './CommitteeInputsearch'
import CommitteeC from './CommitteeC';

function CommitteesList(){


const {committ,loading}= useContext(Context);





console.log(committ);


const mappedCommittee=()=>{
    return committ.map((committee)=>{
       return <CommitteeC name={committee.name} chair ={committee.chair} chairparty ={committee.chair_party}/> })
}

if(loading){
    return <Loading/>
}
if(committ.length<1){
    <h2 className="section-title">No statements matched your search criteria</h2>
}

    return(
        <>

<section className = "section">
    <h2 className= "section-title">committees</h2>

   <div className="cocktails-center">
    <h1>hello</h1>
    {mappedCommittee()}
    

   </div>
</section>
</>





    )
}

export default CommitteesList