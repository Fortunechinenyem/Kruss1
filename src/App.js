import { Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Services from "./pages/Services";
import AutoErrand from "./pages/AutoErrand";
import Blog from "./pages/Blog";
import BuySell from "./pages/BuySell";
import CarDiagnostic from "./pages/CarDiagnostics";
import FleetManagement from "./pages/FleetManagement";
import PrePurchase from "./pages/PrePurchase";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/autoerrand" element={<AutoErrand />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/buysell" element={<BuySell />} />
        <Route path="/cardiagnostics" element={<CarDiagnostic />} />
        <Route path="/fleetmanagement" element={<FleetManagement />} />
        <Route path="/prepurchase" element={<PrePurchase />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
