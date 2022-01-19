import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';



import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";


function App() {
  return (

    <Router>

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
      
      <Footer>
      
      </Footer >
      
      
     
      

      
    </Router>





  );
}

export default App;
