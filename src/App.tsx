import Principio_Component from './DespliegueComponentes/Principio_Component';
import Via_Component from './DespliegueComponentes/Via_Component';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


const App = () => {
  return (

<Router>
      <Routes>
        <Route path="/Principio_Component" element={<Principio_Component />} />
        <Route path="/Via_Component" element={<Via_Component />} />
      </Routes>
    </Router>
  );
}

export default App;