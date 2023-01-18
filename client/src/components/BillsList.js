


function BillsList({bills}){

    console.log(bills);


  const mappedBills = bills.map((bill)=>{
    return<div key={bill.bill_id}>
        <ul>Title: {bill.short_title}<br></br> Sponsor Party: {bill.sponsor_party}
        </ul></div>
  })
return(
    <>
    
   <div> {mappedBills}</div>
   </>
)








}


export default BillsList;