// import { Route, Routes} from 'react-router-dom';
// import { Box } from '@mui/material'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes> */}
        <Home></Home>
        {/* 
        <ExerciseDetail></ExerciseDetail>
        <Footer />   */}
    </div>
  );
}

export default App;
