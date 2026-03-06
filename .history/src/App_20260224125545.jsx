import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Home from '../src/components/Pages/Home/index.jsx'


function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route>exact={true} path='/' element='<Home/>'</Route> 
      </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;

