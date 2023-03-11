import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-table">
          <div className="nav-item">
            <a href="/" className="nav-link about-me-link">
              About Me
            </a>
          </div>
          <div className="nav-item">
            <a href="/" className="nav-link previous-work-link">
              Previous Work
            </a>
          </div>
          <div className="nav-item">
            <a href="/" className="nav-link projects-link">
              Projects
            </a>
          </div>
          <div className="nav-item">
            <a href="/" className="nav-link contact-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
