import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Home from './components/Pages/Home/index.jsx';
import About from './components/Pages/About/index.jsx';
import Shop from './components/Pages/Shop/index.jsx';
import Cart from './components/Pages/Cart/index.jsx';
import Checkout from './components/Pages/Checkout/index.jsx';
import MyAccount from './components/Pages/MyAccount/index.jsx';
import Contact from './components/Pages/Contact/index.jsx';
import { CartProvider } from './context/CartContext.jsx';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Nav />
         
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
