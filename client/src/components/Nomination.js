import{NavLink} from "react-router-dom"
import SingleNomination from "./SingleNomination";
import {useState} from "react";


function Nomination({uri,id,organization,name}){




const [selectedId,setSelectedId] = useState(null);
const [showComponent,setShowComponent]=useState(false);


const handleDetailsClick=(id)=>{
    setSelectedId(id);
    setShowComponent(!showComponent);
}
return(
   <article className="cocktail">
    <div className="img-container">
        <p>Name: {name}</p>
    </div>
    <div className='statement-footer'>
        <h3>{organization}</h3>
    
        {/* <a href={uri}>{uri}</a> */}
      <button onClick={()=>handleDetailsClick(id)}>Details</button>
    </div>
    {selectedId && showComponent &&<SingleNomination id={selectedId}/>}
    </article>
)




}

export default Nomination