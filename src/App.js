import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Waiter from './pages/Waiter';
import Chef from './pages/Chef';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/mesa' element={<Waiter />} />
        <Route path='/cocina' element={<Chef />} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
