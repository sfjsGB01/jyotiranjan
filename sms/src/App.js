
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Register from "./Register"
import Login from "./Login"
import Item from "./Item"
import NoPage from "./NoPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextContainer } from "./hooks/useAuth";
import { ProtectedRoute } from "./hooks/useAuth";


function App() {
  return (
    <AuthContextContainer>
      <Layout />
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextContainer>
  );
}

export default App;

