





function HouseInfo({houseData}){

const mappedHouseData= () =>{return houseData.map((house)=>{
    return <li key={houseData.id}>{house.title} {house.first_name} {house.last_name} </li>}
)}
    return(
        <h1>{mappedHouseData()}</h1>
    )
}

export default HouseInfo