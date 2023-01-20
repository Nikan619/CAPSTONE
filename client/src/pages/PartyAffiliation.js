
import {useEffect, useState} from "react"

import PartyInfo from "../components/PartyInfo"

function PartyAffiliation({user}) {

    console.log(user.id);
    const options= ['Democrat','Republican','Independent'];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const [showPartyInfo,setShowPartyInfo] = useState(false);

    const [userParty, setUserParty] = useState("")



    const handleSubmit = () => {

        const params = {
            affiliation: selectedOption,
            user_id: user.id
        }
        fetch("/userparty",{ method: "POST",
       body: JSON.stringify(params),
       headers:{'Content-Type': 'application/json'}
       }) .then((response=>response.json())
    .then(data => {console.log(data)}))}




  

    const handleClick = () => {
        setShowPartyInfo(!showPartyInfo)
    }

return (
<>
    <form onSubmit ={handleSubmit}>
        <label>
Specify your party affiliation:
 <select value = {selectedOption} onChange={e => setSelectedOption(e.target.value)}>
{options.map((option)=>(
 <option key ={option} value={option}>{option}</option>))}
</select>
</label>
<button type = "submit"> Submit</button>
    </form>
   <h1 onClick= {handleClick} >Click here to see more info about your party!</h1> 
  {showPartyInfo? <PartyInfo user= {user}/>:null}
    </>

)}


export default PartyAffiliation;