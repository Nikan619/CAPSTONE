


import React, {useState} from "react";



function SenatorDisplay ({senator}) {


const [newComponent,setNewComponent] = useState(false)


{

const handleClick=()=>{
    setNewComponent(!newComponent);

}  


console.log(senator);

    return (
        <>
       <h1 onClick={handleClick}> {senator.short_title} {senator.first_name} {senator.last_name} </h1>
       {/* {newComponent && <Details senator= {senator}/>} */}
       <p> You can find them at...</p>
       <a href ={senator.url}>Seantor's Homepage</a>
       <p>Connect with them on twitter </p>
       <p>@{senator.twitter_account}</p>

       </>
       

       
    )




}
}

export default SenatorDisplay