import logo from './logo.svg';
import './App.css';
// import ApiFetch from './components/ApiFetch';
import NodeLambda from './components/NodeLambda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NodeLambda/>
        {/* <ApiFetch /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
