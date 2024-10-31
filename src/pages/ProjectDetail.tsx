import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  Image,
  Clock,
  Home
} from 'lucide-react';
import TabNavigation from '../components/TabNavigation';
import WeatherForecast from '../components/WeatherForecast';
import WorkOrderList from '../components/WorkOrderList';
import { STANDARD_WORK_ORDERS } from '../data/workOrders';
import PlansAndDocs from '../components/PlansAndDocs';
import ProjectPhotos from '../components/ProjectPhotos';
import TimeTracking from '../components/TimeTracking';
import FinancialOverview from '../components/FinancialOverview';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'documents', label: 'Plans & Docs', icon: FileText },
  { id: 'photos', label: 'Photos', icon: Image },
  { id: 'time', label: 'Time', icon: Clock },
  { id: 'financial', label: 'Financial', icon: DollarSign }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for the weather forecast
  const weatherForecast = [
    { date: '2024-03-18', high: 75, low: 55, conditions: 'sunny' },
    { date: '2024-03-19', high: 72, low: 54, conditions: 'partly-cloudy' },
    { date: '2024-03-20', high: 68, low: 52, conditions: 'cloudy' },
    { date: '2024-03-21', high: 71, low: 53, conditions: 'rain' },
    { date: '2024-03-22', high: 73, low: 56, conditions: 'sunny' }
  ];

  const handleWorkOrderUpdate = (workOrderId: string, data: any) => {
    console.log('Updating work order:', workOrderId, data);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Location Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="3001 Cottonwood Ln"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="Rose Hill"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="KS"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">ZIP</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="67133"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                  </div>
                  <WeatherForecast forecast={weatherForecast} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Project Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Project Type</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="Foundation + Waterproofing"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Builder Project #</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="2024-072"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date Added</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="2024-03-15"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Floorplan</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="Custom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Permit #</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="P4358-A19"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Permit Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="2024-03-15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Work Orders</h2>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Add Work Order
                </button>
              </div>
              <WorkOrderList
                workOrders={STANDARD_WORK_ORDERS}
                onUpdate={handleWorkOrderUpdate}
              />
            </div>
          </div>
        );
      case 'documents':
        return <PlansAndDocs />;
      case 'photos':
        return <ProjectPhotos />;
      case 'time':
        return <TimeTracking />;
      case 'financial':
        return <FinancialOverview />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit Project
        </button>
      </div>

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {renderContent()}
    </div>
  );
};

export default ProjectDetail;