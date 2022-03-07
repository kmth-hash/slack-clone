import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />}></Route>
          <Route path="/room/:roomID" element={<Chat />}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
