import "./DashBoardHeader.css";

const DashBoardHeader = () => (
  <header className="main-header">
    <div className="header-container">
      <div className="logo-section">
        <div className="logo-icon">SD</div>
        <div className="logo-text">
          <h1>
            Student<span>DashBoard</span>
          </h1>
        </div>
      </div>
      <nav className="nav-bar">
        <a href="#" className="nav-link active">
          Overview
        </a>
        <a href="#" className="nav-link">
          Students
        </a>
        <a href="#" className="nav-link">
          Courses
        </a>
        <a href="#" className="nav-link">
          Reports
        </a>
      </nav>
      <div className="user-profile">
        <div className="avatar-placeholder">SM</div>
      </div>
    </div>
  </header>
);

export default DashBoardHeader;
