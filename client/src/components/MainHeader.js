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
<ul className= {styles.link1}>
    <NavLink  to ="/affiliation">Party Creed</NavLink>
</ul>

<ul className={styles.link2}>
    <NavLink  to ="/senators">Your State's Senators!</NavLink>
</ul>
<ul className={styles.link3}>
    <NavLink  to ="/house">How much do you know about the House?!</NavLink>
</ul>
<ul className={styles.link4}>
    <NavLink  to ="/bills">Billing?!</NavLink>
</ul>
<button className={styles.button} onClick={handleLogoutClick}>
    Logout
</button>


</ul>
</nav>
</header>

)

}

export default MainHeader;