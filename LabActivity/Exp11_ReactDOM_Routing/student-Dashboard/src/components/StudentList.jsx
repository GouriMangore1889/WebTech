function StudentList({ students }) {
  return (
    <div className="container">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p className="empty">No students added yet</p>
      ) : (
        students.map((student, index) => (
          <div className="card" key={index}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;