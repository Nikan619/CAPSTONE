
import Search from "./Search.js"



import {useState} from "react"

import {Link} from 'react-router-dom';

// import {useHistory} from "react-router-dom";

// import {useHistory} from 'react-router-dom';

function HouseInfo({houseData,setHouseData}){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(houseData/ itemsPerPage);
    const paginatedItems = houseData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    // const history = useHistory();

    const [detailClick,setDetailClick] =useState(false)

    function handleClick() {
//    history.push("/memberdetails")
    }

const mappedHouseData= () =>{return paginatedItems.map((house)=>{
    return (<>
    <li onClick={handleClick} key={houseData.id}>{house.title} {house.first_name} {house.last_name} </li>
    {/* <p>{detailClick? <HouseMemberDetails house={house} />: null}</p> */}
    </>)
}
)}



    return(

<>

        <h1>{mappedHouseData()}</h1>
<div>
    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>
    Previous </button>
    <button disabled= {currentPage === totalPages} onClick={()=> setCurrentPage(currentPage+1)}>
        Next
    </button>
</div>
       
        </>
    )
}

export default HouseInfo