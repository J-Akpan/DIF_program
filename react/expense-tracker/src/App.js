import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

      <NavBar />

      <div className="content">
        <Home />


      </div>
    </div>
  );
}

export default App;
