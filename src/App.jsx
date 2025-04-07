// src/App.jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PM25Page from './pages/PollutantPage/PM25Page';
import PM10Page from './pages/PollutantPage/PM10Page';
import O3Page from './pages/PollutantPage/O3Page';
import NO2Page from './pages/PollutantPage/NO2Page';
import SO2Page from './pages/PollutantPage/SO2Page';
import COPage from './pages/PollutantPage/COPage';
import NOPage from './pages/PollutantPage/NOPage';
import NH3Page from './pages/PollutantPage/NH3Page';
import AQIChatbot from './pages/AQIChatbot'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pollutant/pm2_5" element={<PM25Page />} />
      <Route path="/pollutant/pm10" element={<PM10Page />} />
      <Route path="/pollutant/o3" element={<O3Page />} />
      <Route path="/pollutant/no2" element={<NO2Page />} />
      <Route path="/pollutant/so2" element={<SO2Page />} />
      <Route path="/pollutant/co" element={<COPage />} />
      <Route path="/pollutant/no" element={<NOPage />} />
      <Route path="/pollutant/nh3" element={<NH3Page />} />
      <Route path="/aqi-chatbot" element={<AQIChatbot />} />
    </Routes>
  );
}

export default App;
