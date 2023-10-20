// App.tsx
import React from 'react';
import { Container } from  'semantic-ui-react'; 
import AboutMe from './components/AboutMe';
import ProjectDropdown from './components/ProjectDropdown';

import './App.css';

import CourseProjects from './components/CourseProjects';
import PersonalProjects from './components/PersonalProjects';
import UniversityProjects from './components/UniversityProjects';
const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Felipe Sousa</h1>
      <Container>
        <AboutMe />
        <h2>Projetos Pessoais</h2>
        <PersonalProjects />
        <h2>Projetos da UnB</h2>
        <UniversityProjects />
        <h2>Projetos de Cursos</h2>
        <CourseProjects />
      </Container>
    </div>
  );
}

export default App;
