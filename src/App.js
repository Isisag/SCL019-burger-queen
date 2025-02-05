import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Waiter from "./pages/Waiter";
import Chef from "./pages/Chef";
import Home from "./pages/Home";
import MenuContextProvider from "./context/MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <div className="app">
        <Routes>
          <Route path="/mesa" element={<Waiter />} />
          <Route path="/cocina" element={<Chef />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </MenuContextProvider>
  );
}

export default App;
