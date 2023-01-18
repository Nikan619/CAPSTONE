import {NavLink} from 'react-router-dom';

import styles from  "./MainHeader.module.css"



const MainHeader = ({user,setUser}) => {

//     const mystyle ={
//         font: "inherit",
// padding: "0.5rem 1.5rem",
// border: "1px solid #8b005d",
// color: "white",
// background: "#8b005d",

// cursor: "pointer"
//   }

    function handleLogoutClick(){
        fetch("/logout",{method:"DELETE"}).then((r)=>{
            if(r.ok){
                setUser(null);
            }
        })
    }


return (
<header> 
<nav className ="NavBar">
<ul>

<li>
    <NavLink  to ="/senators">Your State's Senators!</NavLink>
</li>
<li>
    <NavLink  to ="/house">How much do you know about the House?!</NavLink>
</li>
<li>
    <NavLink  to ="/bills">Billing?!</NavLink>
</li>
<button className={styles.button} onClick={handleLogoutClick}>
    Logout
</button>


</ul>
</nav>
</header>

)

}

export default MainHeader;