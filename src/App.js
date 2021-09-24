import React  from 'react';
import './App.css'

import Navbar from './component/navbar';
import Home from './component/home';
import Project from './component/project';
import Upcoming from './component/upcoming';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Project/>
      <Upcoming/>
    </div>
    
  );
}

export default App;
