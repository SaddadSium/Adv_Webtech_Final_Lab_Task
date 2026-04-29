import "./styles/variables.css";
import "./App.css";
import DashboardHeader from "./components/layout/DashBoardHeader";
import StudentCard from "./components/student/StudentCard";

function App() {
  const students = [
    {
      id: "22-46000-1",
      name: "Poran Khan",
      major: "Computer Science",
      gpa: 3.85,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Poran",
      courses: [
        { name: "React JS", color: "#050e11" },
        { name: "Node.js", color: "#0e140e" },
        { name: "UI Design", color: "#0a0a0a" },
      ],
    },
    {
      id: "22-48767-2",
      name: "Laila Sara",
      major: "Electrical Engineering",
      gpa: 3.92,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      courses: [
        { name: "Circuits", color: "#8d7e65" },
        { name: "Calculus", color: "#2e0b0b" },
      ],
    },
    {
      id: "22-48906-3",
      name: "Khaled Rayhan",
      major: "Software Engineering",
      gpa: 3.75,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayhan",
      courses: [
        { name: "Database", color: "#0b1422" },
        { name: "Data Structures", color: "#0c1512" },
      ],
    },
    {
      id: "22-48800-1",
      name: "Farzana Islam",
      major: "Data Science",
      gpa: 3.98,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farzana",
      courses: [
        { name: "Python", color: "#1e113d" },
        { name: "Statistics", color: "#3c2210" },
        { name: "Machine Learning", color: "#0d2b31" },
      ],
    },
  ];

  return (
    <div className="app-shell">
      <DashboardHeader />
      <main className="dashboard-content">
        <header className="content-header">
          <h2>Student Directory</h2>
          <p>
            Manage and view all enrolled students and their academic progress.
          </p>
        </header>
        <div className="grid-container">
          {students.map((s) => (
            <StudentCard key={s.id} {...s} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
