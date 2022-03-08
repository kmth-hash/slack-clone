import "./App.css";
import react, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Chat from "./Chat";
import Login from './Login';

function App() {
  const [user, setuser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomID" element={<Chat />}></Route>
            <Route path="/" element={<Login/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
