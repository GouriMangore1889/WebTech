import Student from "./Student";
import "./App.css";

function App() {

  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Student Information</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <Student name="Gouri" age={22} course="Computer" />
      <Student name="Samiksha" age={21} course="IT" />
      <Student name="Shravani" age={23} course="AI" />
      <Student name="Ankita" age={23} course="AI" />

    </div>
  );
}

export default App;