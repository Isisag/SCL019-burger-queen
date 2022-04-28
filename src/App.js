import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import WaiterView from './components/WaiterView';
import ChefView from './components/ChefView';
import Welcome from './components/utilities/Welcome';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/mesa' element={<WaiterView />} />
        <Route path='/cocina' element={<ChefView />} />
        <Route path='/' element={<Welcome />}/>
      </Routes>
    </div>
  );
}

export default App;
