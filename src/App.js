import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards /> 
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/about/:id" element={<MoreDetails />} />
        <Route path="/products/*" element={<Product/>}/>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
