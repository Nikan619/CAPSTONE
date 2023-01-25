import{NavLink} from "react-router-dom"


function StatementC({url,title,date,party,state,id,name}){

return(
   <article className="cocktail">
    <div className="img-container">
        <p>Name: {name}</p>
    </div>
    <div className='statement-footer'>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <a href={url}>{url}</a>
        <NavLink to={`/statement/${date}`} className="btn btn-primary"></NavLink>
    </div>
    </article>
)




}

export default StatementC