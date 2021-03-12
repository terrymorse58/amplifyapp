import logo from './logo-lisa.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "Hello World" version 0.1.2
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to nowhere
        </a>
      </header>
    </div>
  );
}

export default App;
