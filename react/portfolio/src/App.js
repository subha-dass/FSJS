
import './App.css';
import './style/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact';
function App() {
  return(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}/>
    </Routes>
  </BrowserRouter>
);
}
export default App;
