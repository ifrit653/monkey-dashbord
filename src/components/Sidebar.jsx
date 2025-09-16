import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import {
  Home,
  TrendingUp,
  Brain,
  Upload,
  Send,
  Settings,
  FileSpreadsheet,
} from 'lucide-react';

const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    path: '/',
    description: 'Vue d\'ensemble des feedbacks',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: TrendingUp,
    path: '/analytics',
    description: 'Analyses détaillées',
  },
  {
    id: 'model-test',
    label: 'Test du Modèle',
    icon: Brain,
    path: '/model-test',
    description: 'Tester la prédiction de sentiment',
  },
  {
    id: 'import-data',
    label: 'Import de Données',
    icon: Upload,
    path: '/import-data',
    description: 'Importer CSV/Excel',
  },
  {
    id: 'survey-creator',
    label: 'Créer Sondage',
    icon: Send,
    path: '/survey-creator',
    description: 'Lancer un nouveau sondage',
  },
  {
    id: 'manage-data',
    label: 'Gestion Données',
    icon: FileSpreadsheet,
    path: '/manage-data',
    description: 'Gérer les données existantes',
  },
  {
    id: 'settings',
    label: 'Paramètres',
    icon: Settings,
    path: '/settings',
    description: 'Configuration du système',
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Feedback System</h2>
        <p className="text-gray-600 text-sm mt-1">Analyse intelligente des feedbacks</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-160px)]">
        {navigationItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={window.location.pathname === item.path}
            onClick={() => {
              navigate(item.path);
              setSidebarOpen(false);
            }}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
