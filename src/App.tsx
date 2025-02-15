import Principio_Component from './DespliegueComponentes/Principio_Component';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Via_Component from './DespliegueComponentes/Via_Component';
import Grupo_Component from './DespliegueComponentes/Grupo_Component';
import Forma_Component from './DespliegueComponentes/F_Forma_Component';
import Administracion_Component from './DespliegueComponentes/F_Administracion_Component';
import Categoria_Component from './DespliegueComponentes/Categoria_Component';
import Laboratorio_Component from './DespliegueComponentes/Laboratorio_Component';
import Bodega_Component from './DespliegueComponentes/BodegaComponent';
import ListaPrecios_Component from './DespliegueComponentes/Lista_de_Precios';
import PrecioProductos_Component from './DespliegueComponentes/Precio_de_Productos';
import TipoMovimiento_Component from './DespliegueComponentes/Tipo_de_Movimiento';
import Farmaco_Component from './DespliegueComponentes/Farmacos';


const App = () => {
  return (

<Router>
      <Routes>
        <Route path='/Principio_Component' element={<Principio_Component />} />
        <Route path='/Via_Component' element={<Via_Component />} />
        <Route path='/Grupo_Component' element={<Grupo_Component />} />
        <Route path='/Forma_Component' element={<Forma_Component />} />
        <Route path='/Administracion_Component' element={<Administracion_Component />} />
        <Route path='/Categoria_Component' element={<Categoria_Component />} />
        <Route path='/Laboratorio_Component' element={<Laboratorio_Component />} />
        <Route path='/Bodega_Component' element={<Bodega_Component />} />
        <Route path='/ListaPrecios_Component' element={<ListaPrecios_Component />} />
        <Route path='/PrecioProductos_Component' element={<PrecioProductos_Component />} />
        <Route path='/TipoMovimiento_Component' element={<TipoMovimiento_Component />} />
        <Route path='/Farmaco_Component' element={<Farmaco_Component />} />
      </Routes>
    </Router>
  );
}

export default App;