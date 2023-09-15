import logo from './logo.svg';
import './App.css';
import MainHeader from './Component/MainHeader';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Carousel from './Component/Carousel';
import CartBoard from './Component/CartBoard';
import SingleCard from './Component/SingleCard';
function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainHeader/>}>
              <Route index path='/' element={<Home/>}></Route>
              <Route path='carousal' element={<Carousel/>}></Route>
              <Route path='cart' element={<CartBoard/>}></Route>
              <Route path='/user/:userId' element={<SingleCard/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
