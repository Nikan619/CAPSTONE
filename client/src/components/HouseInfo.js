
import Search from "./Search.js"

import HouseMemberDetails from "./HouseMemberDetails.js";

import {useState} from "react"


// import {useHistory} from 'react-router-dom';

function HouseInfo({houseData,setHouseData}){


    // let history = useHistory();

    const [detailClick,setDetailClick] =useState(false)

    function handleClick() {
    //    history.push("/memberdetails");
    }

const mappedHouseData= () =>{return houseData.map((house)=>{
    return (<>
    <li onClick={handleClick} key={houseData.id}>{house.title} {house.first_name} {house.last_name} </li><button onClick={handleClick}>More info!</button>
    </>)
}
)}



    return(

<>

        <h1>{mappedHouseData()}</h1>
     
        </>
    )
}

export default HouseInfo