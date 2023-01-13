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


</ul>
</nav>
</header>

)

}

export default MainHeader;