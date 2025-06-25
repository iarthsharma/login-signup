import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from "./components/Register";
import Login from "./components/Login";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Login & Signup</h1>
        <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
