import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StudentContext } from "../../context/StudentContext";
import "./DashBoardHeader.css";

const DashBoardHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { favoriteIds } = useContext(StudentContext);

  return (
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
            Projects
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <div className="favorite-count">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#f43f5e"
              stroke="#f43f5e"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="count-badge">{favoriteIds.size}</span>
          </div>
          <div className="user-profile">
            <div className="avatar-placeholder">SM</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
