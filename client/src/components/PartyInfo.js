
import {useEffect,useState} from "react"

function PartyInfo({user}) {


    const [userinfo,setUserInfo] =  useState([])

    useEffect(()=>{
        fetch(`/party/${user.id}`)
        .then(response=>response.json())
        .then(user => {
            setUserInfo(user)
            console.log(user);
        })   
    },[])
    

return (

<>
<h1>{userinfo.affiliation ==='Democrat'? <p>"The Democratic Party is one of the two major contemporary political parties in the United States. Founded in 1828, it was predominantly built by Martin Van Buren, who assembled a wide cadre of politicians in every state behind war hero Andrew Jackson, making it the world's oldest active political party.[11][12][13] Its main political rival has been the Republican Party since the 1850s. The party is a big tent,[14] and is less ideologically uniform than the Republican Party (with major individuals within it frequently holding widely differing political views) due to the broader list of unique voting blocs that compose it,[15][16][17][5][18] though modern liberalism is the majority ideology in the party.[5][19[]"</p>:null}</h1>
<h1>{userinfo.affiliation ==='Independent'?<p>"The American Independent Party is the party of ordered liberty in a nation under God. We believe in strict adherence to written law. We believe the Constitution is the contract America has with itself. Its willful distortion has led to the violation of our Tenth Amendment guaranteed right to limited government—which inevitably requires oppressive taxation. Its faithful application will lift that burden. Freed from the lawless oppression of Progressive rule, we may then compassionately and justly use our energy and ingenuity to provide for ourselves and our families. We will then establish truly free and responsible enterprise and reassert the basic human right to property
We believe in protecting all human life however weak, defenseless, or disheartened; endorse the family as the essential bulwark of liberty, compassion, responsibility, and industry; and declare the family’s right and responsibility to nurture, discipline, and educate their children.
We assert the absolute, concurrent Second Amendment guaranteed individual right to self defense coupled with a strong common defense, a common defense which requires a national sovereignty not damaged by imprudent treaties.
We oppose all illegal immigration.
We support secure borders and immigration policies, inviting the best of the world to join us in freedom."</p>:null}</h1>
<h1>{userinfo.affiliation ==='Republican' ?<p>"The Republican Party was founded in the northern states in 1854 by forces opposed to the expansion of slavery, ex-Whigs and ex-Free Soilers. The Republican Party quickly became the principal opposition to the dominant Democratic Party and the briefly popular Know Nothing Party. The party grew out of opposition to the Kansas–Nebraska Act, which repealed the Missouri Compromise and opened Kansas Territory and Nebraska Territory to slavery and future admission as slave states.[35][36] They denounced the expansion of slavery as a great evil, but did not call for ending it in the southern states. While opposition to the expansion of slavery was the most consequential founding principal of the party, like the Whig party it replaced, Republicans also called for economic and social modernization."</p> :null}</h1>  

</>

)


}


export default PartyInfo