import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Calendar, MapPin } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <Draggable draggableId={project.id.toString()} index={index} type="PROJECT">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
      >
        <h4 className="font-medium text-gray-900 mb-2">{project.name}</h4>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{project.startDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{project.client}</span>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default ProjectCard;