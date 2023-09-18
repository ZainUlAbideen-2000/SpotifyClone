import Login from './routes/Login';
import Signup from './routes/Signup';
import './output.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home';

function App() {
  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className='px-20'>Spotify</h1>
      <h1 className='px-20'>Spotify</h1> */}
    </div>
  );
}

export default App;
