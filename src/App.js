import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Calendar from "./components/Calendar";

import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import CoffeeCats from "./pages/CoffeeCats";
import Ollie from "./pages/cats/ollie";
import River from "./pages/cats/river";
import Ruby from "./pages/cats/ruby";
import Silvia from "./pages/cats/silvia";
import Chai from "./pages/cats/chai";
import Mocha from "./pages/cats/mocha";

import GuessingGame from "./components/GuessingGame";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/guessinggame" element={<GuessingGame />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/coffeecats" element={<CoffeeCats />} />
        <Route path="/cats/ollieanddunkinmacchiato" element={<Ollie />} />
        <Route path="/cats/riverlatte" element={<River />} />
        <Route path="/cats/rubyespresso" element={<Ruby />} />
        <Route path="/cats/silviacappuccino" element={<Silvia />} />
        <Route path="/cats/chailatte" element={<Chai />} />
        <Route path="/cats/mochafrappe" element={<Mocha />} />
      </Routes>
    </Router>
  );
};

export default App;
