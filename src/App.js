import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <Header />

          <AppBody>
            <Sidebar />

            <Routes>
              {/* Chat */}
              {/* <Route path="/" exact element={<Sidebar />} /> */}
            </Routes>
          </AppBody>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
