import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Lp from './Lp'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
