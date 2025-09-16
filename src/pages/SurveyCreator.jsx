import React from 'react'

function SurveyCreator() {
  return (
<div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Créateur de Sondages</h1>
              <p className="text-gray-600 mt-2">Lancez un nouveau sondage pour collecter des feedbacks</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Nouveau Sondage</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre du Sondage</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Évaluation du cours de Mathématiques"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cours Concerné</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Sélectionner un cours</option>
                      <option>Mathématiques</option>
                      <option>Physique</option>
                      <option>Chimie</option>
                    </select>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Send className="inline mr-2" size={20} />
                  Créer le Sondage
                </button>
              </div>
            </div>
          </div>  )
}

export default SurveyCreator