
import {useState,useEffect} from'react';






function Statement(){


    const [statement,setStatement]= useState([])


    const[recentBills,setRecentBills]=useState(false);


    const[searchTerm,setSearchTerm]=useState('a');



    const[statementsearch,Setsearch]= useState([]);



    useEffect(()=>{
        fetch( "/statements") 
        .then(response=>response.json())
        .then(statements => {
            setStatement(statements)
            console.log(statements);
        })   
        },[])
        



      const mappedStatement=statement.map((statement)=>{
        return <>
        <h1> Party:{statement.party}</h1>
        <h2>  Speaker: {statement.name}</h2>
        <p>Subject: {statement.title}</p>


        </>

      })


const handleClick = ()=>{
    setRecentBills(!recentBills);
}



    return (
<>
  <p> Click to see recent statements by party members.</p>
<button onClick={handleClick}>Recent Statements</button>
{recentBills?<h1>{mappedStatement}</h1>:null}
<p>Search for specific Statements</p>


</>


    
    )
}


export default Statement