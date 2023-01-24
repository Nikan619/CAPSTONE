import {NavLink} from 'react-router-dom';

import React,{useContext} from 'react'

import styles from  "./MainHeader.module.css"

import { Context } from "../store/auth-context"



const MainHeader = () => {

    const {user,setUser} = useContext(Context)

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
    <>
    <button className={styles.button} onClick={handleLogoutClick}>
    Logout
</button>
<header> 
<nav className ="navbar">
<div className ='nav-center'>
<ul className= {styles.link1}>
    <NavLink  to ="/affiliation">Party Creed</NavLink>
</ul>
<ul className= {styles.link1}>
    <NavLink  to ="/list">List</NavLink>
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
<ul className={styles.link4}>
    <NavLink  to ="/nominations">Nominations</NavLink>
    <ul className={styles.link4}>
    <NavLink  to ="/nominationlist">NominationList</NavLink>
</ul>
</ul>
</div>
</nav>
</header>

</>


)

}

export default MainHeader;