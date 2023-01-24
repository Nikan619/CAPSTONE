
import React,{useState,useEffect} from 'react';
import Loading from '../components/Loading';



function SingleNomination ({id}){


    const [statement,setStatement]= useState(null);
    
useEffect(()=>{
    fetch(`/specificnomination?query=${id}`,{
        method: "GET",
        headers: { 'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(data=>{setStatement(data);})
   
},[id])
  


console.log(statement.congress);



const mappedStatement = ()=>{
    return statement.map((s)=>{
        <li>{s.congress};</li>

    })



}
    return( 
         <h1>{mappedStatement}</h1>
    )
}

export default SingleNomination;