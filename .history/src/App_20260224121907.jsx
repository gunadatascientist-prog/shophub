import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/header/header.jsx';



function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      
      </BrowserRouter>

    </>


  );
}

export default App;

