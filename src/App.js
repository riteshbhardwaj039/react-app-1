import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'; 
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
