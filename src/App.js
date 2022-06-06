import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Inicio from './components/Inicio';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
function App() {
  return (

    <Router>
      <div className='row' style={{"padding": "0", "margin": "0"}}>
        <div className='col-lg-2 col-md-3 col-4' style={{"padding": "0", "width":"60px"}}>
          <Sidebar/>
        </div>
      <div className='col-lg col-md col'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/conocimientos' element={<Conocimientos/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
