// App.tsx
import React from 'react';
import './App.css';
import { Container } from  'semantic-ui-react'; 
import AboutMe from './components/AboutMe';
import ProjectDropdown from './components/ProjectDropdown';

import projectData from './data/projectData.json';
import unbProjects from './data/unbProjects.json'; 
import courseProjects from './data/courseProjects.json';
import personalProjects from './data/personalProjects.json';


function App() {
  const personalProjects = projectData.filter((project) => project.category === 'Pessoais');
  const universityProjects = projectData.filter((project) => project.category === 'UnB');
  const courseProjects = projectData.filter((project) => project.category === 'Cursos');

  return (
    <div className="App">
      <h1>Felipe Sousa</h1>
      <AboutMe />
      <ProjectDropdown category="Pessoais" projects={personalProjects} />
      <ProjectDropdown category="UnB" projects={universityProjects} />
      <ProjectDropdown category="Cursos" projects={courseProjects} />
    </div>
  );
}

export default App;
