
import React,{useState,useEffect} from 'react';
import Loading from '../components/Loading';



function SingleNomination ({id}){


    const [nomination,setNomination]= useState([]);
    
useEffect(()=>{
    fetch(`/specificnomination?query=${id}`,{
        method: "GET",
        headers: { 'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(data=>{
        setNomination(data);})
   
},[id])
  


// console.log(statement.congress);


console.log(nomination.actions);

const mappedActions = nomination.actions? nomination.actions.map((action)=>{ 
        return(<> <ul>Date:{action.date}</ul>
        <ul>Description: {action.description}</ul></>)}):null



    return( 
        <>
         <h1>Congress: {nomination.congress}</h1>

         <h1>State:{nomination.nominee_state}</h1>
         <h1>{nomination.description}</h1>
         {mappedActions}
         </>
    )

    }
export default SingleNomination;