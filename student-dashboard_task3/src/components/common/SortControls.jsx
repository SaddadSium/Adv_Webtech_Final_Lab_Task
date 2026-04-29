import "./SortControls.css";

const SortControls = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-controls">
      <span className="sort-label">Sort by:</span>
      <div className="sort-buttons">
        <button
          className={`sort-btn ${sortBy === "default" ? "active" : ""}`}
          onClick={() => setSortBy("default")}
        >
          Default
        </button>
        <button
          className={`sort-btn ${sortBy === "name" ? "active" : ""}`}
          onClick={() => setSortBy("name")}
        >
          Name (A-Z)
        </button>
        <button
          className={`sort-btn ${sortBy === "gpa" ? "active" : ""}`}
          onClick={() => setSortBy("gpa")}
        >
          GPA (High to Low)
        </button>
      </div>
    </div>
  );
};

export default SortControls;
