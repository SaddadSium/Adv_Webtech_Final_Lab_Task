import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

const initialStudents = [
  {
    id: "22-49998-1",
    name: "Sadman Mamun",
    major: "Computer Science",
    gpa: 3.05,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadman",
    courses: [
      { name: "React JS", color: "#61dbfb" },
      { name: "Node.js", color: "#68a063" },
      { name: "UI Design", color: "#f43f5e" },
    ],
  },
  {
    id: "22-49998-2",
    name: "Ali Hasan",
    major: "Electrical Engineering",
    gpa: 3.82,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
    courses: [
      { name: "Circuits", color: "#f59e0b" },
      { name: "Calculus", color: "#ef4444" },
    ],
  },
  {
    id: "22-51202-3",
    name: "Julia Kabir",
    major: "Software Engineering",
    gpa: 3.75,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
    courses: [
      { name: "Database", color: "#3b82f6" },
      { name: "Algorithms", color: "#10b981" },
    ],
  },
  {
    id: "22-48458-3",
    name: "Shoyeb Rahman",
    major: "Data Science",
    gpa: 3.90,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maliha",
    courses: [
      { name: "Python", color: "#8b5cf6" },
      { name: "Statistics", color: "#f97316" },
      { name: "Machine Learning", color: "#06b6d4" },
    ],
  },
];

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [sortBy, setSortBy] = useState("default");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleToggleFavorite = (id) => {
    setFavoriteIds((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  };

  const addStudent = (student) => {
    setStudents((prev) => [student, ...prev]);
    showNotification("Student added successfully!");
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    showNotification("Student removed.");
  };

  const showNotification = (message) => {
    setNotification(message);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.includes(searchQuery),
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "gpa") {
      return b.gpa - a.gpa;
    }
    return 0;
  });

  return (
    <StudentContext.Provider
      value={{
        students: sortedStudents,
        allStudents: students,
        loading,
        searchQuery,
        setSearchQuery,
        favoriteIds,
        handleToggleFavorite,
        sortBy,
        setSortBy,
        addStudent,
        removeStudent,
        notification,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
