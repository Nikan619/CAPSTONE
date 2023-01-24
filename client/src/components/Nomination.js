import{NavLink} from "react-router-dom"


function Nomination({uri,id,organization,name}){




return(
   <article className="cocktail">
    <div className="img-container">
        <p>Name: {name}</p>
    </div>
    <div className='statement-footer'>
        <h3>{organization}</h3>
    
        <a href={uri}>{uri}</a>
        <NavLink to={`/nomination/${id}`} className="btn btn-primary"> Deatils</NavLink>
    </div>
    </article>
)




}

export default Nomination