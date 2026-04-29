import { useContext, useEffect } from "react";
import "./styles/variables.css";
import "./App.css";
import DashboardHeader from "./components/layout/DashBoardHeader";
import StudentCard from "./components/student/StudentCard";
import AddStudentForm from "./components/student/AddStudentForm";
import LoadingSpinner from "./components/common/LoadingSpinner";
import SearchBar from "./components/common/SearchBar";
import SortControls from "./components/common/SortControls";
import { StudentContext } from "./context/StudentContext";

function App() {
  const { students, loading, notification } = useContext(StudentContext);

  useEffect(() => {
    if (!loading) {
      document.title = `Dashboard — ${students.length} Students`;
    } else {
      document.title = "Dashboard — Loading...";
    }
  }, [students.length, loading]);

  return (
    <div className="app-shell">
      {notification && <div className="notification-toast">{notification}</div>}
      <DashboardHeader />
      <main className="dashboard-content">
        <header className="content-header">
          <h2>Student Directory</h2>
          <p>
            Manage and view all enrolled students and their academic progress.
          </p>
        </header>

        <AddStudentForm />

        <div className="controls-section">
          <SearchBar />
          <SortControls />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid-container">
            {students.map((s) => (
              <StudentCard key={s.id} {...s} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
