import { faFacebook, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import './index.scss';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={logoS} alt="logo" />
                <img src={logoSubtitle} alt="Sharif" className='sub-logo' />
            </Link>

            {/* navbar  */}
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="works-link" to="/works">
                    <FontAwesomeIcon icon={faTasks} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            {/* social links  */}
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/kazi331">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/kazi331">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://skype.com">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://facebook.com/kazi331">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a></li>
            </ul>
        </div>
    );
};

export default Sidebar;