
import {useState,useEffect} from'react';






function Nominations(){


    const [nominations,setNominations]= useState([])


    const[recentBills,setRecentBills]=useState(false);


    const[searchTerm,setSearchTerm]=useState('a');



    const[statementsearch,Setsearch]= useState([]);



    useEffect(()=>{
        fetch( "/nominations") 
        .then(response=>response.json())
        .then(nominations => {
            setNominations(nominations);
            console.log(nominations);
        })   
        },[])
        



      const mappedNomination=nominations.map((nomination)=>{
        return <>
        <h1> Party:{nomination.party}</h1>
        <h2>  Speaker: {nomination.name}</h2>
        <p>Subject: {nomination.title}</p>


        </>

      })


const handleClick = ()=>{
    setRecentBills(!recentBills);
}



    return (
<>
  <p> Click to see recent statements by party members.</p>
<button onClick={handleClick}>Recent Statements</button>
{recentBills?<h1>{mappedNomination}</h1>:null}
<p>Search for specific Statements</p>


</>


    
    )
}


export default Nominations