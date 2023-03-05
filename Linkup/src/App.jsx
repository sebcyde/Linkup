import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Home from './pages/home/Home.jsx'
import "./App.css";

function App() {
  const [text, SetText] = useState("");

  const handleChange = (event) => {
    SetText(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleClick = () => {
    SetText("");
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login  handleChange={handleChange} text={text}  />}
          />
          <Route
            path="Home"
            element={<Home handleChange={handleChange} text={text} />}
          />
            <Route
            path="SignUp"
            element={<SignUp />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
