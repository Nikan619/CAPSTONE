import "./Congress.css"

import SenatorDisplay from "../components/SenatorDisplay.js"



import React, {useState} from 'react';


function Congress({user}) {

    console.log(user);


    const [stateSenators, setStateSenators] = useState([]);
    const [isLoading,setIsLoading]  = useState(false)



const [party,setParty] = useState("");
const [state,setState] = useState("");


const handleParty = (e) => {
    setParty(e.target.value);
}
const handleState = (e) => {
    setState(e.target.value);
}


// useEffect(() => {
//     fetch("/congress")
//     .then(response => {
//         return response.json()})
//     .then((congressData) =>console.log(congressData))
// })


const handleSubmit = (e) => {
   e.preventDefault();
   setIsLoading(true);
        fetch("/senators")
        .then(response => {
            return response.json()})
            .then((congressData) => {
               const senatorD = congressData.filter((data)=> {
                  return data.state === state && data.party ===party
                });
                setStateSenators(senatorD)
                console.log(senatorD);
                setIsLoading(false)
            })
            
        }

        const mappedSenators = stateSenators.map((senator) => {
        return <ul> <SenatorDisplay senator= {senator}/>  </ul>})

        

        return (
            <>
            <h1>Hello {user.username}</h1>
            <h1> Please enter some answers to your political preferences</h1>
            <div className="">
                <form onSubmit ={handleSubmit} >
                    <label> Party Preference?
                        <input onChange={handleParty} value = {party}type="text" name= "party"/>
                 </label>
                 <br />
                 <label>State?
                    <input  onChange ={handleState} value = {state} type="text" name= "zip"/>
                 </label>
                 <button type="submit">Submit</button>

            
            </form>
            <h1> Here are your state senators</h1>
            {isLoading? <section><h1>LOADING...</h1></section>: <h1> {mappedSenators} </h1>}
          
            </div>
            </>
        )
    }

export default Congress;