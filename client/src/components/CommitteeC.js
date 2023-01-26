




function CommitteeC({chair,chairparty,name}){


    return(
       <article className="cocktail">
        <div className="img-container">
            <p>Chair {chair}</p>
        </div>
        <div className='statement-footer'>
            <h3>{name}</h3>
            <h4>{chairparty}</h4>
            
        </div>
        </article>
    )
    
    
    
    
    }
    
    export default CommitteeC