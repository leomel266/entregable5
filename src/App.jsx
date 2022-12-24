import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorCard from "./pages/ErrorCard";
import Home from "./pages/home";
import Pokedex from "./pages/Pokedex";
import PokedexInfo from "./pages/PokedexInfo";

function App() {
  return (
    <div className='App'>
      <Toaster position='top-center' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Rutas Protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<ErrorCard />} path='/pokedex/err' />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
