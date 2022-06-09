import "./index.scss";
import {Link} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'  //This is an import of the Logo with a names
import LogoSub from '../../assets/images/logo_sub.png'

const SideBar = () => {

    return(
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"/>
                <img src={LogoSub} alt="Serge" className="subLogo" />
            </Link>
        </div>
        
    )
}

export default SideBar;