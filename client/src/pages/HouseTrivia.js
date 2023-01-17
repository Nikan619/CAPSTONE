
import {useEffect,useState} from 'react'

import HouseInfo from '../components/HouseInfo.js'

import Search from "../components/Search.js"

function HouseTrivia () {

    const address= "https://www.politico.eu/cdn-cgi/image/width=1280,quality=80,onerror=redirect,format=auto/wp-content/uploads/2015/06/Bush-thumbs-up-GETTY.jpg"
    const sad = "https://i.imgflip.com/1lm0va.jpg"

const [answer,setAnswer] = useState(0)

const[houseData,setHouseData] =useState([])

const [correct,setCorrect] = useState(false)

const[incorrect,setIncorrect] = useState(false)

const [newComponent,setNewComponent] = useState(false)




const handleClick=()=>{
    setNewComponent(!newComponent);

}  

const handleChangeanswer =(e) =>{
    setAnswer(e.target.value)
}


    useEffect(()=>{
        fetch("/house")
        .then((res)=>res.json())
        .then((data)=>setHouseData(data))
    },[])



    const handleSubmit =(e) =>{
e.preventDefault();
const answerInt=  parseInt(answer)
console.log(answerInt);
if(answerInt === 435)
{
    setCorrect(!correct)
    
}else{
    setIncorrect(!incorrect);
  
}

        console.log(houseData.length);
        setAnswer(0)
    }


    const reverseIncorrect= () => {setTimeout(()=> {
        setIncorrect(!incorrect)
    },2000)}

const reverseCorrect = () => {setTimeout(()=> {
    setCorrect(!correct)
},2000)}

    return(
    <>
    <h1>
       Question...how many house members are in the house?
    </h1>
    <form onSubmit = {handleSubmit}>
        <input type="number" name="answer" onChange ={handleChangeanswer} value ={answer}></input>
        <button type="submit" name="submit">YES!</button>
    </form>
   
    {correct? <> <h1> {reverseCorrect()}</h1><img src = {address} alt="thumbs up bush"  style= {{width: '50%',height:'50%'}}/><h2>You got it!</h2></>: null}
    {incorrect?<> <h1>{reverseIncorrect()}</h1> <img src = {sad} alt="sad bush" style= {{width: '50%',height:'50%'}}/><h2> Failure!</h2></>: null}
<div>
    <br></br>
    <br></br>
    <div><Search houseData={houseData} setHouseData={setHouseData}/></div>
<button onClick={handleClick}>All House Members Here!</button>

</div>

      {newComponent && <HouseInfo houseData={houseData} setHouseData={setHouseData}/>}
   
    
    </>
    
    
    )
}

export default HouseTrivia