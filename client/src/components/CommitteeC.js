




function CommitteeC({chair,chair_party,name}){


    return(
       <article className="cocktail">
        <div className="img-container">
            <p>Name: {chair}</p>
        </div>
        <div className='statement-footer'>
            <h3>{name}</h3>
            <h4>{chair_party}</h4>
            
        </div>
        </article>
    )
    
    
    
    
    }
    
    export default CommitteeC