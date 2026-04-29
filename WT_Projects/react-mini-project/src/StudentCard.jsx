import { useState } from "react";

function StudentCard(props) {
  const [present, setPresent] = useState(0);
  const [status, setStatus] = useState("Absent");

  const markPresent = () => {
    setPresent(present + 1);
    setStatus("Present");
  };

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>{props.course}</h3>
      <p>Status: {status}</p>
      <p>Present Count: {present}</p>
      <button onClick={markPresent}>Mark Present</button>
    </div>
  );
}

export default StudentCard;