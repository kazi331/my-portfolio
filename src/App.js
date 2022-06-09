import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Works from './components/Works';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
