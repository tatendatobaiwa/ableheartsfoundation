import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProgramsAndInitiatives from './pages/ProgramsAndInitiatives/ProgramsAndInitiatives';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import Shop from './pages/Shop/Shop';

import './App.css';

function App() {
  return (
    <Router>
      <div className="AbleHeartsFoundation">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs-and-initiatives" element={<ProgramsAndInitiatives />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;