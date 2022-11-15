import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
