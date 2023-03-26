import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Mainheader from './component/Mainheader';
import Home from './component/Home';
import Old from './component/Old_song'
import New from './component/New_song'
import Trending from './component/Trending';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainheader/>}>
            <Route index path='/' element={<Home/>}></Route>
            <Route path='Old' element={<Old/>}></Route>
            <Route path='New' element={<New/>}></Route>
            <Route path='Trending' element={<Trending/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
