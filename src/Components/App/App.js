import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from '../Header/Header';

function App(props) {

    return (   
      <div className="App">
        <BrowserRouter>
          <Routes className="App">
            <Route path="/" element={<div><Header /></div>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
