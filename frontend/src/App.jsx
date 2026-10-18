
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Feed from "./pages/feed";
import Galary from "./pages/Galary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Feed" element={<Galary />} />
      </Routes>
    </Router>
  );
};

export default App;

