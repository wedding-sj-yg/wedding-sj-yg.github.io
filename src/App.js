import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Senior from './pages/Senior';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/senior" element={<Senior />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
