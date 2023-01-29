// import { Route, Routes} from 'react-router-dom';
// import { Box } from '@mui/material'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import './components/style.css'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes> */}
        {/* <Home></Home> */}
        {/* 
        <ExerciseDetail></ExerciseDetail>
        <Footer />   */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercises' element={<ExerciseDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
