


function SenatorDisplay ({senator}) 

{
console.log(senator);

    return (
        <>
       <h1> {senator.short_title} {senator.first_name} {senator.last_name} </h1>
       <p> You can find them at...</p>
       <a href ={senator.url}>Seantor's Homepage</a>
       <p>Connect with them on twitter </p>
       <p>@{senator.twitter_account}</p>

       </>
       

       
    )




}

export default SenatorDisplay