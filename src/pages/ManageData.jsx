import React from 'react'

function ManageData() {
  return (
 <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Gestion des Données</h1>
              <p className="text-gray-600 mt-2">Gérez et organisez vos données de feedback existantes</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Données Existantes</h3>
              <p className="text-gray-600">
                Interface pour visualiser, modifier, supprimer et exporter les données stockées.
                Fonctionnalités de nettoyage et de validation des données.
              </p>
            </div>
          </div>  )
}

export default ManageData