import React from 'react';
import Slider from 'react-slick';

interface ProjectProps {
  projectData: {
    title: string;
    description: string;
    images: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project">
      <h2>{projectData.title}</h2>
      <p>{projectData.description}</p>
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