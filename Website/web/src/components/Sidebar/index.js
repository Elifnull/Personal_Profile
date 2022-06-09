import "./index.scss";
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'  //This is an import of the Logo with a names
import LogoSub from '../../assets/images/logo_sub.png'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideBar = () => {

    return(
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"/>
                <img src={LogoSub} alt="Serge" className="subLogo" />
            </Link>
            <nav>
                <NavLink exact="true" acctiveclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" acctiveclassname="active" to='/about'
                className="aboutLink"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" acctiveclassname="active" to='/'
                className='contactLink'
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
        </div>
        
    )
}

export default SideBar;