
import {useEffect, useState} from "react"

import PartyInfo from "../components/PartyInfo"

function PartyAffiliation({user}) {


    const republican = "https://1000logos.net/wp-content/uploads/2017/06/Republican-Logo-1874.png";
    const democrat = "https://static.wixstatic.com/media/93e399_5c8b613039094607a232328c81e3b991~mv2.jpg/v1/fill/w_640,h_596,al_c,lg_1,q_85,enc_auto/93e399_5c8b613039094607a232328c81e3b991~mv2.jpg";
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