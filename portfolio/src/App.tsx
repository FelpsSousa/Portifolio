import React from 'react';
import './App.css';
import Project from './components/Project';
import Dropdown from './components/Dropdown';
import projectData from './data/projectData.json';

function App() {
  return (
    <div className="App">
      <h1>Meu Portfólio</h1>
      {projectData.map((project, index) => (
        <Dropdown
          key={index}
          title={project.title}
          content={
            <Project projectData={project} />
          }
        />
      ))}
    </div>
  );
}

export default App;
