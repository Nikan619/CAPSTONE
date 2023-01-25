
import {useState} from'react';


import React from 'react';
import { Context } from "../store/auth-context"
import Loading from "./Loading"
import {useEffect} from "react"
import {useContext} from "react"


import CommitteeInputsearch from './CommitteeInputsearch'

const CommitteesList = ()=>{


const {committ,loading}= useContext(Context);





console.log(committ);


// newArray.forEach(function(obj){
//     delete obj[[Prototype]];
// });

// console.log(newArray);

if(loading){
    return <Loading/>
}
if(committ.length<1){
    <h2 className="section-title">No statements matched your search criteria</h2>
}

    return(
        <>
<CommitteeInputsearch />
<section className = "section">
    <h2 className= "section-title">statements</h2>

   <div className="cocktails-center">
    <h1>hello</h1>
    {/* {newArray.map((data,index) => (
 <CommitteeC key ={index} data={data} />))} */}
    

   </div>
</section>
</>





    )
}

export default CommitteesList