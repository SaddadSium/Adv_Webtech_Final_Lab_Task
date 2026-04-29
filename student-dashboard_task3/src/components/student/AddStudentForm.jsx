import { useState, useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import "./AddStudentForm.css";

const AddStudentForm = () => {
  const { addStudent, allStudents } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    major: "",
    gpa: "",
    courses: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.id.trim()) {
      newErrors.id = "Student ID is required";
    } else if (isNaN(formData.id)) {
      newErrors.id = "Student ID must be numeric";
    } else if (allStudents.some((s) => s.id === formData.id)) {
      newErrors.id = "Student ID must be unique";
    }

    if (!formData.major.trim()) newErrors.major = "Major is required";

    const gpaNum = parseFloat(formData.gpa);
    if (!formData.gpa) {
      newErrors.gpa = "GPA is required";
    } else if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      newErrors.gpa = "GPA must be between 0 and 4.0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newStudent = {
        ...formData,
        gpa: parseFloat(formData.gpa),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
        courses: formData.courses
          .split(",")
          .map((c) => ({
            name: c.trim(),
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
          }))
          .filter((c) => c.name !== ""),
      };
      addStudent(newStudent);
      setFormData({ name: "", id: "", major: "", gpa: "", courses: "" });
      setErrors({});
    }
  };

  return (
    <section className="add-student-section">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="e.g. 22480001"
              className={errors.id ? "error" : ""}
            />
            {errors.id && <span className="error-msg">{errors.id}</span>}
          </div>

          <div className="form-group">
            <label>Major</label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              placeholder="Write your major"
              className={errors.major ? "error" : ""}
            />
            {errors.major && <span className="error-msg">{errors.major}</span>}
          </div>

          <div className="form-group">
            <label>GPA</label>
            <input
              type="text"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              placeholder="0.0 - 4.0"
              className={errors.gpa ? "error" : ""}
            />
            {errors.gpa && <span className="error-msg">{errors.gpa}</span>}
          </div>

          <div className="form-group full-width">
            <label>Courses (comma separated)</label>
            <input
              type="text"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              placeholder="e.g. React JS, Node.js, Python"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">
          Add Student
        </button>
      </form>
    </section>
  );
};

export default AddStudentForm;
