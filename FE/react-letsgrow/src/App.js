import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4><strong>
          Your indoor cultivating solution, inspired here!</strong>
        </h4>
        <a
          className="App-link"
          href="http://plantgrow.io:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets Grow Together.
        </a>
      </header>
    </div>
  );
}

export default App;
