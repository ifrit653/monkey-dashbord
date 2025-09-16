import React from 'react'

function Settings() {
  return (
 <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Paramètres</h1>
              <p className="text-gray-600 mt-2">Configuration du système et préférences</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Configuration Système</h3>
              <p className="text-gray-600">
                Paramètres du modèle IA, configuration des seuils de sentiment, 
                gestion des utilisateurs, et autres options système.
              </p>
            </div>
          </div>  )
}

export default Settings