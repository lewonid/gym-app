
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Exercises from './pages/Exercises';
import Footer from './components/Footer';
import './assets/style.css'
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './pages/PageNotFound';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
