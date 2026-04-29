import { useContext } from "react";
import PropTypes from "prop-types";
import CourseTag from "../common/CourseTag";
import StatBadge from "../common/StatBadge";
import { StudentContext } from "../../context/StudentContext";
import "./StudentCard.css";

const StudentCard = ({ name, id, avatar, gpa, major, courses }) => {
  const { favoriteIds, handleToggleFavorite, removeStudent } =
    useContext(StudentContext);
  const isFavorite = favoriteIds.has(id);

  return (
    <div className="student-card">
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => handleToggleFavorite(id)}
        aria-label="Toggle Favorite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isFavorite ? "#f43f5e" : "none"}
          stroke={isFavorite ? "#f43f5e" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>

      <div className="card-top">
        <div className="avatar-wrapper">
          <img src={avatar} alt={name} className="student-avatar" />
          <div className="status-indicator online"></div>
        </div>
        <div className="student-info">
          <h3>{name}</h3>
          <p className="student-major">{major}</p>
          <p className="student-id">ID: {id}</p>
        </div>
      </div>

      <div className="card-stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Credits" value="120" />
      </div>

      <div className="card-courses">
        <h4>Enrolled Courses</h4>
        <div className="tags-grid">
          {courses.map((course, index) => (
            <CourseTag
              key={index}
              courseName={course.name}
              color={course.color}
            />
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button className="btn-view">View Profile</button>
        <button className="btn-remove" onClick={() => removeStudent(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  gpa: PropTypes.number,
  major: PropTypes.string,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ),
};

export default StudentCard;
