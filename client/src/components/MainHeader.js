import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
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


</ul>
</nav>
</header>

)

}

export default MainHeader;