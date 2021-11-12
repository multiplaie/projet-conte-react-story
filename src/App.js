import './App.css';
import {Home} from "./routes/Home.jsx";
import {AddStory} from "./routes/AddStory.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <span className="navbar-brand">Création d'histoire non linéaire</span>
            </div>
          </div>
        </div>
          
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/story/add" exact element={<AddStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
