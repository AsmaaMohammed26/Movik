import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import People from "./pages/People";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import Container from "@mui/material/Container";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";

function App() {

  function ProtectRoute({ children }) {
    const token = localStorage.getItem("token");
    if (token) {
      return children;
    } else {
      return <Login />;
    }
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="xl"  sx={{  paddingTop:"50px" }} >
        <Routes>
          <Route path="/" element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path="/home" element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path="/movies" element={<ProtectRoute><Movie /></ProtectRoute>} />
          <Route path="/tv" element={<ProtectRoute><Tv /></ProtectRoute>} />
          <Route path="/people" element={<ProtectRoute><People /></ProtectRoute>} />
          <Route path="/details/:itemId"  element={<ProtectRoute><DetailsPage /></ProtectRoute>} />                                          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
