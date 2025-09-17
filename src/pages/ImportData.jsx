import { Upload, FileSpreadsheet } from "lucide-react"
function ImportData() {
  return (
<div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Import de Données</h1>
              <p className="text-gray-600 mt-2">Importez vos feedbacks depuis des fichiers CSV ou Excel</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Upload className="mr-2 text-blue-600" />
                  Import CSV
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">Glissez votre fichier CSV ici</p>
                  <p className="text-gray-400 text-sm mt-2">ou cliquez pour sélectionner</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileSpreadsheet className="mr-2 text-green-600" />
                  Import Excel
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                  <FileSpreadsheet size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">Glissez votre fichier Excel ici</p>
                  <p className="text-gray-400 text-sm mt-2">Formats supportés: .xlsx, .xls</p>
                </div>
              </div>
            </div>
          </div>  )
}

export default ImportData