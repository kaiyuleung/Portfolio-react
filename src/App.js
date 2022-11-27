import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//* Router
import { Routes, Route } from 'react-router-dom';

//* Pages
import { Home, Biography, SkillSet, Portfolio } from './pages'

//* Components
import { NavBar, FootBar } from './components'


function App() {
  return (
    <div id='App'>
      <NavBar />
      <main id="Main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/biography' element={<Biography />} />
          <Route path='/skillset' element={<SkillSet />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <FootBar />
    </div>
  );
}

export default App;
