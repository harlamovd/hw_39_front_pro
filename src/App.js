import logo from './logo.svg';
import './App.css';
import MainLayout from "./MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          < MainLayout />
        </div>

      </header>
    </div>
  );
}

export default App;
