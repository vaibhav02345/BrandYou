import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Builder from './pages/Builder';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import Resumes from './pages/Resumes';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resumes" element={<Resumes />} />
      </Routes>
    </div>
  );
}
