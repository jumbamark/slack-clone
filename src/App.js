import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" exact element={<Header />} />
            {/* <Route path="users/*" element={<Users />} /> */}
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
