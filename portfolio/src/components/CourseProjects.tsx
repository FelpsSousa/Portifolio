import React from 'react';
import ProjectSection from './ProjectSection';
import javaOne from '../images/java-inicilizando-projeto.jpg';
import javaTwo from '../images/java-todo-list-0.jpg';
import javaThree from '../images/java-todo-list-1.jpg';
import JavaFour from '../images/java-todo-list-2.jpg';
const courseProjects = [
  {
    title: "Projeto de Curso 1",
    category: "Cursos",
    description: "Descrição do Projeto de Curso 1.",
    images: [javaOne],
    repository: ""
  },
  {
    title: "Projeto de Curso 2",
    category: "Cursos",
    description: "Descrição do Projeto de Curso 2.",
    images: [JavaFour],
    repository: ""
  }
];

const CourseProjects: React.FC = () => {
  return (
    <ProjectSection category="Cursos" projects={courseProjects} />
  );
};

export default CourseProjects;
