import { BarChart3, MessageSquare, TrendingUp, Send } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Principal</h1>
          <p className="text-gray-600 mt-2">Vue d'ensemble de tous vos feedbacks étudiants</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Feedbacks</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
            </div>
            <MessageSquare className="text-blue-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Sentiment Positif</p>
              <p className="text-3xl font-bold text-green-600 mt-2">68%</p>
            </div>
            <TrendingUp className="text-green-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Cours Analysés</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">24</p>
            </div>
            <BarChart3 className="text-purple-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Taux de Réponse</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">84%</p>
            </div>
            <Send className="text-orange-600" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Contenu du Dashboard Principal</h3>
        <p className="text-gray-600">
          Ici seront affichés les graphiques principaux, les feedbacks récents, et les alertes importantes.
          Cette section sera développée avec les visualisations de données une fois la navigation finalisée.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
