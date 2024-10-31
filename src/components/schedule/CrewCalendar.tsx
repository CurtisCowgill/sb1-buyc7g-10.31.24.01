import React from 'react';
import CrewCalendarHeader from './CrewCalendarHeader';
import CrewRow from './CrewRow';

const crews = [
  { id: 1, name: 'Team Alpha', lead: 'John Doe', size: 5, specialty: 'Foundations', status: 'Available' as const },
  { id: 2, name: 'Team Beta', lead: 'Jane Smith', size: 4, specialty: 'Waterproofing', status: 'Available' as const },
  { id: 3, name: 'Team Gamma', lead: 'Bob Wilson', size: 6, specialty: 'Flatwork', status: 'Available' as const }
];

const CrewCalendar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-[200px_1fr] border-t border-gray-200">
        <div className="border-r border-gray-200">
          <div className="p-4 border-b border-gray-200 font-medium text-gray-700">
            Crews
          </div>
          {crews.map(crew => (
            <div key={crew.id} className="p-4 border-b border-gray-200">
              {crew.name}
            </div>
          ))}
        </div>
        
        <div>
          <CrewCalendarHeader />
          {crews.map(crew => (
            <CrewRow key={crew.id} crew={crew} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrewCalendar;