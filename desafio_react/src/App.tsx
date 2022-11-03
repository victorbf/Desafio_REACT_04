import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Page1 from './routes/page-1';
import Page2 from './routes/page-2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/pagina-2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
