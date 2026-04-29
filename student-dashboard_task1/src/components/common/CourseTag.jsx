import PropTypes from "prop-types";
import "./CourseTag.css";

const CourseTag = ({ courseName, color = "#6366f1" }) => {
  return (
    <span
      className="course-tag"
      style={{
        borderColor: color,
        color: color,
        backgroundColor: `${color}10`,
      }}
    >
      {courseName}
    </span>
  );
};

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default CourseTag;
