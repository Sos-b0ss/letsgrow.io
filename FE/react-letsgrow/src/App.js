import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><strong>
          Your one stop shop, for your indoor grow op!</strong>
        </p>
        <a
          className="App-link"
          href="http://letsgrow.ddns.net:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          login.
        </a>
      </header>
    </div>
  );
}

export default App;
