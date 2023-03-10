
import React from 'react';
import { Context } from "../store/auth-context"
import Loading from "./Loading"
import {useEffect} from "react"
import {useContext} from "react"
import StatementC from "./StatementC"

import SearchFormStatement from './SearchFormStatement'

const StatementsList = ()=>{


const {statement,loading}= useContext(Context);
console.log(statement);



if(loading){
    return <Loading/>
}
if(statement.length<1){
    <h2 className="section-title">No statements matched your search criteria</h2>
}

    return(
        <>
<SearchFormStatement />
<section className = "section">
    <h2 className= "section-title">statements</h2>

   <div className="cocktails-center">
    {statement.map((s)=>{
        
       return <StatementC key ={s.date} party={s.party} url={s.url} date={s.date} title={s.title} id ={s.member_id} name={s.name}/>
    })}

   </div>
</section>
</>





    )
}

export default StatementsList