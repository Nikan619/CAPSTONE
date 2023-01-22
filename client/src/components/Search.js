import React,{useState} from "react";

function Search ({houseData,setHouseData}) {


const [first_name,setFirst_Name]=useState("");

const [last_name,setLast_Name]=useState("");

const [showAll,setShowAll] = useState(false)


const handleNameChange=(e)=>{
 setFirst_Name(e.target.value)
}

const handleLastNameChange =(e) =>{
    setLast_Name(e.target.value)

}

const showAllClicked = (e)=>{
    setShowAll(!showAll);
}




const handleSubmit=(e)=>{
    e.preventDefault();
    const filteredData = houseData.filter((data)=>{
        return data.first_name === first_name || data.last_name === last_name;
    })
    setHouseData(filteredData)

}  

console.log(houseData);

    return(<div>


<h1>
    <i>Search for a house member</i>
    <form onSubmit={handleSubmit}>
        <div >
            <input type = "text" placeholder="First name..."  value={first_name} onChange={handleNameChange} ></input>
            <input type = "text" placeholder="Last name..."  value={last_name} onChange={handleLastNameChange} ></input>
            <button type="submit">Show me </button>
           
        </div>
    </form>
    {/* <button type ="click" onClick={showAll}>Show all</button> */}

</h1>






    </div>)





}

export default Search