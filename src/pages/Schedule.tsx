import React, { useState } from 'react';
import { type DropResult } from 'react-beautiful-dnd';
import ProjectStages from '../components/schedule/ProjectStages';
import type { Project } from '../types';

const initialStages = [
  { id: 'ready', title: 'Ready to Start', projects: [] },
  { id: 'stakeout', title: 'Stake Out', projects: [] },
  { id: 'footings', title: 'Footings', projects: [] },
  { id: 'walls', title: 'Walls', projects: [] },
  { id: 'strip', title: 'Strip', projects: [] },
  { id: 'waterproofing', title: 'Waterproofing', projects: [] },
  { id: 'flatwork', title: 'Flatwork', projects: [] }
];

const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Downtown Foundation Repair',
    client: 'ABC Corporation',
    status: 'In Progress',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    budget: 150000
  },
  {
    id: 2,
    name: 'Residential Foundation',
    client: 'John Smith',
    status: 'Planning',
    startDate: '2024-03-20',
    endDate: '2024-04-30',
    budget: 85000
  }
];

const Schedule = () => {
  const [stages, setStages] = useState(() => {
    const initialData = [...initialStages];
    initialData[0].projects = mockProjects;
    return initialData;
  });

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    
    if (!destination) return;

    const sourceStage = stages.find(s => s.id === source.droppableId);
    const destStage = stages.find(s => s.id === destination.droppableId);

    if (!sourceStage || !destStage) return;

    const newStages = stages.map(stage => {
      if (stage.id === source.droppableId) {
        const newProjects = [...stage.projects];
        const [movedProject] = newProjects.splice(source.index, 1);
        return { ...stage, projects: newProjects };
      }
      
      if (stage.id === destination.droppableId) {
        const newProjects = [...stage.projects];
        const sourceProjects = stages.find(s => s.id === source.droppableId)?.projects || [];
        const movedProject = sourceProjects[source.index];
        newProjects.splice(destination.index, 0, movedProject);
        return { ...stage, projects: newProjects };
      }
      
      return stage;
    });

    setStages(newStages);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <ProjectStages stages={stages} onDragEnd={handleDragEnd} />
      </div>
    </div>
  );
};

export default Schedule;