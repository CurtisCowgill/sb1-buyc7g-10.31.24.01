import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';

interface StageColumnProps {
  stageId: string;
  title: string;
  projects: Project[];
}

const StageColumn: React.FC<StageColumnProps> = ({ stageId, title, projects }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg min-w-[300px]">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <Droppable droppableId={stageId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 min-h-[200px]"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default StageColumn;