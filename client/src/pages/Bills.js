import { useEffect,useState } from "react"

import BillsList from "../components/BillsList.js";


function Bills(){

const [query,setQuery] = useState("");
const [billsData,setBillsData] = useState([]);
    

    // useEffect(()=>{
    //     fetch(`https://api.propublica.org/congress/v1/bills/search.json?query=${query}`,{
    //         method: "GET",
    //         headers: { 'Content-Type': 'application/json'}
    //     }).then(response => response.json())
    //     .then(data=>{console.log(data);})
    
    // })

const handleSubmit =e =>{
    e.preventDefault();

 fetch(`/bills?query=${query}`,{
            method: "GET",
            headers: { 'Content-Type': 'application/json'}
        }).then(response => response.json())
        .then(data=>{setBillsData(data);})
    
 

}




return(
    <>
    <h1>Search for different Bills!</h1>
<form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div style ={{display:"flex"}}>

<BillsList bills={billsData}/>
    </div>
    </>
)

}







export default Bills