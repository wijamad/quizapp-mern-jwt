import React from "react";
import AnswersView from "./components/AnswersView";
import HomeView from "./components/HomeView";
import NilaiView from "./components/NilaiView";
import SoalView from "./components/SoalView";
import ProfileView from "./components/ProfileView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route path="/soal/:id" element={<AnswersView />} />
          <Route path="/nilai/:id" element={<NilaiView />} />
          <Route path="/buatpertanyaan/:id" element={<SoalView />} />
          <Route exact path="/profile" element={<ProfileView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
