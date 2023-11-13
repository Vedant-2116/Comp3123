import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Student from "./components/Student";
import College from "./components/College";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Student sid="101398199" sname="Vedantsinh Gohel" />
        <College />
      </header>
    </div>
  );
}

export default App;
