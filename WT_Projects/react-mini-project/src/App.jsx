import { useEffect } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {

  useEffect(() => {
    console.log("Dashboard Loaded");
  }, []);

  return (
    <div className="container">
      <h1>Student Activity Dashboard</h1>

      <div className="card-row">
        <StudentCard name="Gouri" course="React JS" />
        <StudentCard name="Samiksha" course="Angular" />
        <StudentCard name="Shravani" course="Node JS" />
      </div>
    </div>
  );
}

export default App;