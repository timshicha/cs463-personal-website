import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-table">
          <div className="nav-item">
            <Link to="/" className="nav-link about-me-link">
              About Me
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/previous-work" className="nav-link previous-work-link">
              Previous Work
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/projects" className="nav-link projects-link">
              Projects
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/contact" className="nav-link contact-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
