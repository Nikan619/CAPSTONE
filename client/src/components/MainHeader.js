import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = ({user,setUser}) => {

    function handleLogoutClick(){
        fetch("/logout",{method:"DELETE"}).then((r)=>{
            if(r.ok){
                setUser(null);
            }
        })
    }





return (
<header> 
<nav>
<ul>

<li>
    <NavLink activeClassName={classes.active} to ="/senators">Your State's Senators!</NavLink>
</li>
<li>
    <NavLink activeClassName={classes.active} to ="/house">How much do you know about the House?!</NavLink>
</li>
<button onClick={handleLogoutClick}>
    Logout
</button>


</ul>
</nav>
</header>

)

}

export default MainHeader;