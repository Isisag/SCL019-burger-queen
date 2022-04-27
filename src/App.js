import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import WaiterView from './components/WaiterView';
import ChefView from './components/ChefView';

function App() {
  return (
    <>
    <h1>Welcome to Burger Queen!</h1>
      <Routes>
        <Route path='/mesero' element={<WaiterView />} />
        <Route path='/cocinero' element={<ChefView />} />
      </Routes>
      <Link to="/mesero"> Mesero </Link>
      <Link to="/cocinero"> Cocinero </Link>
      <Link to="/"> Volver </Link>
    </>
  );
}

export default App;
