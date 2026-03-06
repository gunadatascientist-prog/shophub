import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx'


function App() {
  return (
    <>

      <Header />
      <Nav />

    </>


  );
}

export default App;

