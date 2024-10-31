import React from 'react';
import { FileText, Upload, Download, Trash2 } from 'lucide-react';

const PlansAndDocs: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Plans & Documentation</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload New
        </button>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No documents uploaded yet</p>
        </div>
      </div>
    </div>
  );
};

export default PlansAndDocs;