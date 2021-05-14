import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Deep Linking</code>
        </p>
        <a className="App-link" href="https://dev.avenue8.com/newListing" target="_blank" rel="noopener noreferrer" >
          New Listing
        </a>
      </header>
    </div>
  );
}

export default App;
