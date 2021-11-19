/**
 * TODO:
 * - Add page to list archived stories
 * - log user to identify ?
 * - 
 */

import './App.css';
import {Home} from "./routes/Home";
import {AddStory} from "./routes/AddStory";
import Chapter from "./routes/Chapter";
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
          <Route path="story">
            <Route path="add" exact element={<AddStory />} />
            <Route path=":story_id" element={<Chapter />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
