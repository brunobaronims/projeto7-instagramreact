import './styles/App.css';
import Corpo from './components/Corpo.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Corpo />
    </div>
  );
}

export default App;