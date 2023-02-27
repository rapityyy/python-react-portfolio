import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faFolderOpen, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import avatar from './assets/avatar.jpg';
import { Link } from 'react-scroll';


const LeftNavbar = () => {
  return (
    <Col xs={12} className="bg-light d-flex flex-column" style={{ height: '100vh' }}>
        <div className="text-center mt-4 mb-3">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <img src={avatar} alt="Avatar" className="rounded-circle" style={{ width: "100%", maxWidth: "75px" }} />
            </Link>
    
        </div>
        <Nav vertical className="flex-column d-flex justify-content-center text-center pt-5" style={{ flex: 1 }}>
            <NavItem className="nav-item-div flex-grow-1 mb-3">
                <Link
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                </Link>
            </NavItem>

            <NavItem className="flex-grow-1 mb-3">
                <Link
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                </Link>
            </NavItem>

            <NavItem className="flex-grow-1 mb-3">
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                </Link>
            </NavItem>

            <NavItem className="flex-grow-1 mb-3">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            </Link>
            </NavItem>
        </Nav>
    </Col>

  );
};

export default LeftNavbar;
