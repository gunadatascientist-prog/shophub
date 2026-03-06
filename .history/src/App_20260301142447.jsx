import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Home from './components/Pages/Home/index.jsx';
import About from './components/Pages/About/index.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
       
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
