import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componets/Home';
import Cart from './componets/Cart';
import Navbar from './componets/Navbar';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='/Cart' element={<Cart />}></Route>
      <Route path='/nav' element={<Navbar />}></Route>
    </Routes>
    
    </BrowserRouter>

    </>
  );
}

export default App;
