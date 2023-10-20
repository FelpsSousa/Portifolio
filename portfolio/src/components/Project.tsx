// components/Project.tsx
import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface ProjectData {
  title: string;
  repository: string;
  category: string;
  description: string;
  images: string[];
}

const Project: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  console.log(projectData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project">
      <h2>{projectData.title}</h2>
      <p>{projectData.description}</p>
      <a
        href={projectData.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FontAwesomeIcon icon={faGithub} /> Ver no GitHub
      </a>
      <Slider {...settings}>
        {projectData.images.map((image, index) =>(
          <div key={index}>
            <img src={image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;