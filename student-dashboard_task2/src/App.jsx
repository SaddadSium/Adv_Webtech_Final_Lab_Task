import { useState, useEffect } from "react";
import "./styles/variables.css";
import "./App.css";
import DashboardHeader from "./components/layout/DashBoardHeader";
import StudentCard from "./components/student/StudentCard";
import LoadingSpinner from "./components/common/LoadingSpinner";
import SearchBar from "./components/common/SearchBar";
import SortControls from "./components/common/SortControls";

const initialStudents = [
  {
    id: "22-48400-1",
    name: "Azizul Islam",
    major: "Computer Science",
    gpa: 3.85,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Azizul",
    courses: [
      { name: "React JS", color: "#61dbfb" },
      { name: "Node.js", color: "#68a063" },
      { name: "UI Design", color: "#f43f5e" },
    ],
  },
  {
    id: "22-48400-2",
    name: "Prova Sultana",
    major: "Electrical Engineering",
    gpa: 3.92,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prova",
    courses: [
      { name: "Circuits", color: "#f59e0b" },
      { name: "Calculus", color: "#ef4444" },
    ],
  },
  {
    id: "22-48489-3",
    name: "Goni Alam",
    major: "Software Engineering",
    gpa: 3.75,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Goni",
    courses: [
      { name: "Database", color: "#3b82f6" },
      { name: "Algorithms", color: "#10b981" },
    ],
  },
  {
    id: "23-48400-1",
    name: "Merin Khan",
    major: "Data Science",
    gpa: 3.98,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Merin",
    courses: [
      { name: "Python", color: "#8b5cf6" },
      { name: "Statistics", color: "#f97316" },
      { name: "Machine Learning", color: "#06b6d4" },
    ],
  },
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialStudents);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleFavorite = (id, isFav) => {
    setFavoriteIds((prev) => {
      const newFavs = new Set(prev);
      if (isFav) newFavs.add(id);
      else newFavs.delete(id);
      return newFavs;
    });
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.major.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "gpa") {
      return b.gpa - a.gpa;
    }
    return 0;
  });

  useEffect(() => {
    if (!loading) {
      document.title = `Dashboard — ${sortedStudents.length} Students`;
    } else {
      document.title = "Dashboard — Loading...";
    }
  }, [sortedStudents.length, loading]);

  return (
    <div className="app-shell">
      <DashboardHeader favoriteCount={favoriteIds.size} />
      <main className="dashboard-content">
        <header className="content-header">
          <h2>Student Directory</h2>
          <p>
            Manage and view all enrolled students and their academic progress.
          </p>
        </header>

        <div className="controls-section">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          <SortControls sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid-container">
            {sortedStudents.map((s) => (
              <StudentCard
                key={s.id}
                {...s}
                onToggleFavorite={(isFav) => handleToggleFavorite(s.id, isFav)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
