import Login from './routes/Login';
import Signup from './routes/Signup';
import './output.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './routes/Home';
import { useCookies } from 'react-cookie'

function App() {

  //  eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['token'])

  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        {cookies.token ?
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>Home</h1>} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>Home</h1>} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        }
      </BrowserRouter>
      {/* <h1 className='px-20'>Spotify</h1>
      <h1 className='px-20'>Spotify</h1> */}
    </div>
  );
}

export default App;
