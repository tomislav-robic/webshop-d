import Header from "./Header.js"
import "./Header.css"
import './App.css';
import RecommendedCategory from "./RecommendedCategory.js";
import Login from "./Login.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<RecommendedCategory />}/>
            <Route path="/Login" element={<Login />}/>
          </Routes>
        </div>  
      </div>
    </Router>
  );
}

export default App;
