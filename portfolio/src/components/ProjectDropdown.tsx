// components/ProjectDropdown
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Project, { ProjectData } from './Project';

interface ProjectDropdownProps {
  category: string;
  projects: ProjectData[];
}

const ProjectDropdown: React.FC<ProjectDropdownProps> = ({ category, projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null); // Renomeie o tipo Project aqui também

  const handleProjectSelect = (project: ProjectData) => { // Renomeie o tipo Project aqui também
    setSelectedProject(project);
  };

  return (
    <div className="project-dropdown">
      <Dropdown
        title={`Projetos ${category}`}
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

export default ProjectDropdown;
