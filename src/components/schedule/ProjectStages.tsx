import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import StageColumn from './StageColumn';
import { Project } from '../../types';

interface ProjectStagesProps {
  stages: {
    id: string;
    title: string;
    projects: Project[];
  }[];
  onDragEnd: (result: any) => void;
}

const ProjectStages: React.FC<ProjectStagesProps> = ({ stages, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-6 overflow-x-auto pb-6">
        {stages.map((stage) => (
          <StageColumn
            key={stage.id}
            stageId={stage.id}
            title={stage.title}
            projects={stage.projects}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default ProjectStages;