
import React from 'react';
import { Context } from "../store/auth-context"
import Loading from "./Loading"
import {useEffect} from "react"
import {useContext} from "react"
import StatementC from "./StatementC"
import SearchForm from "./SearchForm"
const StatementsList = ()=>{


const {statement,loading}= useContext(Context);




if(loading){
    return <Loading/>
}
if(statement.length<1){
    <h2 className="section-title">No statements matched your search criteria</h2>
}

    return(
        <>
<SearchForm/>
<section className = "section">
    <h2 className= "section-title">statements</h2>

   <div className="statements-center">
    {statement.map((s)=>{
        
       return <StatementC key ={s.member_id} party={s.party} url={s.url} date={s.date} title={s.title} id ={s.member_id} name={s.name}/>
    })}

   </div>
</section>
</>





    )
}

export default StatementsList