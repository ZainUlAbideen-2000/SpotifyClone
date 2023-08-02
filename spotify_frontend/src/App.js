import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className='px-20'>Spotify</h1>
      <h1 className='px-20'>Spotify</h1> */}
    </div>
  );
}

export default App;
