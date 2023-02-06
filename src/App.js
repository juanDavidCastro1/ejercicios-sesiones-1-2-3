import logo from './logo.svg';
import './App.css';
import ListContactComponent from './container/ListContactComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContactComponent/>
      </header>
    </div>
  );
}

export default App;
