import PropTypes from "prop-types";
import CourseTag from "../common/CourseTag";
import StatBadge from "../common/StatBadge";
import "./StudentCard.css";

const StudentCard = ({ name, id, avatar, gpa, major, courses }) => {
  return (
    <div className="student-card">
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
