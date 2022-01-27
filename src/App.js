import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "././firebase";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <AppBody>
              <Sidebar />

              <Routes>
                {/* Chat */}
                <Route path="/" exact element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
