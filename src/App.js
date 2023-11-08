import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import ResultPage from './pages/ResultPage.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
