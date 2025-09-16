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
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/model-test" element={<ModelTest />} />
          <Route path="/import-data" element={<ImportData />} />
          <Route path="/survey-creator" element={<SurveyCreator />} />
          <Route path="/manage-data" element={<ManageData />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
