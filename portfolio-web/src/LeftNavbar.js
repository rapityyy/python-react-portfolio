import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from './assets/avatar.jpg';

const LeftNavbar = () => {
  return (
    <Col xs={12} className="bg-light d-flex flex-column" style={{ height: '100vh' }}>
        <div className="text-center mt-4 mb-3">
            <a href="#home">
                <img src={avatar} alt="Avatar" className="rounded-circle" style={{ width: "100%", maxWidth: "100px" }} />
            </a>
        </div>
        <Nav vertical className="flex-column d-flex justify-content-center text-center pt-5" style={{ flex: 1 }}>
            <NavItem className="nav-item-div flex-grow-1 mb-3">
                <NavLink href="#aboutme">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                About Me
                </NavLink>
            </NavItem>
            <NavItem className="flex-grow-1 mb-3">
                <NavLink href="#">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                Resume
                </NavLink>
            </NavItem>
            <NavItem className="flex-grow-1 mb-3">
                <NavLink href="#">
                <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                Projects
                </NavLink>
            </NavItem>
            <NavItem className="flex-grow-1 mb-3">
                <NavLink href="#">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact
                </NavLink>
            </NavItem>
        </Nav>
    </Col>

  );
};

export default LeftNavbar;
