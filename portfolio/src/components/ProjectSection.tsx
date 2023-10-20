// components/ProjectSection.tsx
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Project, { ProjectData } from './Project';

interface ProjectSectionProps {
  category: string;
  projects: ProjectData[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ category, projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleProjectSelect = (project: ProjectData) => {
    setSelectedProject(project);
  };

  return (
    <div className="project-section">
      <Dropdown
        title={category}
        content={
          <div>
            {projects.map((project, index) => (
              <div key={index} onClick={() => handleProjectSelect(project)}>
                {project.title}
              </div>
            ))}
          </div>
        }
      />
      {selectedProject && <Project projectData={selectedProject} />}
    </div>
  );
};

export default ProjectSection;
