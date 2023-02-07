
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import './assets/style.css'
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
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
