
import {useState} from "react"

function PartyAffiliation({user}) {

    console.log(user.id);
    const options= ['Democrat','Republican','Independent'];

    const [selectedOption, setSelectedOption] = useState(options[0]);



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
    

return (

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

)}


export default PartyAffiliation;