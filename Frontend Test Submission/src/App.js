import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';



function App() {
  return (
    <>

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
