import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import ModelTest from './pages/ModelTest';
import ImportData from './pages/ImportData';
import SurveyCreator from './pages/SurveyCreator';
import ManageData from './pages/ManageData';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/model-test" element={<ModelTest />} />
          <Route path="/import-data" element={<ImportData />} />
          <Route path="/survey-creator" element={<SurveyCreator />} />
          <Route path="/manage-data" element={<ManageData />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
