import React from 'react';
import ProjectSection from './ProjectSection';

const personalProjects = [
  {
    title: "Projeto Pessoal 1",
    category: "Pessoal",
    description: "Descrição do Projeto Pessoal 1.",
    images: ["java-todo-list-1.jpg"],
    repository: ""
  },
  {
    title: "Projeto Pessoal 2",
    category: "Pessoal",
    description: "Descrição do Projeto Pessoal 2.",
    images: ["java-todo-list-2.jpg"],
    repository: ""
  }
];

const PersonalProjects: React.FC = () => {
  return (
    <ProjectSection category="Pessoal" projects={personalProjects} />
  );
};

export default PersonalProjects;
