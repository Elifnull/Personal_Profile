import "./index.scss";
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'  //This is an import of the Logo with a names
import LogoSub from '../../assets/images/logo_sub.png'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideBar = () => {

    return(
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"/>
                <img src={LogoSub} alt="Serge" className="subLogo" />
            </Link>
            <nav>
                <NavLink exact="true" acctiveclassname="active" to='/'
                className='homeLink'
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" acctiveclassname="active" to='/about'
                className="aboutLink"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" acctiveclassname="active" to='/contact'
                className='contactLink'
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/serge-chvorun/"> 
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Elifnull"> 
                        <FontAwesomeIcon icon={faGithubAlt} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
        
    )
}

export default SideBar;

//note: rel in a tag without the rel="noreferrer" leads to volunarability in older webpages