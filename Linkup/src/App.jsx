import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Home from './pages/home/Home.jsx'
import "./App.css";

function App() {
  const [text, SetText] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }
  const handleChange = (event) => {
    SetText(event.target.value);
    console.log(event.target.value)
  };

  const handleClick = () => {
    SetText("");
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login  handleChange={handleChange} text={text} contacts={contacts}  />}
          />
          <Route
            path="SignUp"
            element={<SignUp  addContact={addContact}  />}
          />
          <Route
            path="Home"
            element={<Home handleChange={handleChange} text={text}  contact={contacts} />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
