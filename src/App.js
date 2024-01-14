import { Route, Routes, HashRouter } from 'react-router-dom';
import Main from './pages/Main';
import Senior from './pages/Senior';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/senior" element={<Senior />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
