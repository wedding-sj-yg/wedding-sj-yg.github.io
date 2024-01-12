import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Senior from './pages/Senior';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/senior" element={<Senior />} />
    </Routes>
  );
}

export default App;
