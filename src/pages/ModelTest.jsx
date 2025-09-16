function ModelTest() {
  return (
<div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Test du Modèle IA</h1>
              <p className="text-gray-600 mt-2">Testez la prédiction de sentiment sur vos feedbacks</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Tester la Prédiction de Sentiment</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Saisissez un feedback étudiant :
                  </label>
                  <textarea
                    placeholder="Ex: Le cours était très intéressant mais un peu difficile à suivre..."
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Brain className="inline mr-2" size={20} />
                  Analyser le Sentiment
                </button>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Résultats de l'analyse apparaîtront ici après connexion avec votre modèle Flask
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ModelTest