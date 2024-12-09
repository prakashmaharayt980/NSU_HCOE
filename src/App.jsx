import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import Navbar from "./comp/Navbar";
import Header from "./comp/Header";
import HomePage from "./comp/Home";
import Gallery from "./comp/Gallery";
import Education from "./comp/Education";




const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        {/* Define the routes here */}
       <div className=" lg:w-4/5 mx-auto">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/education" element={<Education />} />
        
        
 
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
