import './styles/App.css';
import Corpo from './components/Corpo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Corpo />
      <Footer />
    </div>
  );
}

export default App;