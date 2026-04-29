import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      name,
      age,
      course,
    };

    setStudents([...students, newStudent]);

    alert("Student Added!");

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
}

export default AddStudent;