import { Nav } from './Componentes/nav';
import { Route, Routes } from "react-router-dom";
import { Nosotros } from './Pages/nosotros';
import { Servicios } from './Pages/servicios';
import { Home } from './Pages/home';
import { Footer } from './Componentes/footer';
import { Whatsapp } from './Componentes/whatsapp';

function App() {
  return (
    <div className="App">
      {/* nav */}
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='nosotros' element={<Nosotros/>}></Route>
          <Route path='servicios' element={<Servicios/>}></Route>
        </Route>
      </Routes>
      <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
