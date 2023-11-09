import Header from '../compenents/Header'
import React from 'react';
import Project from '../compenents/Project';
import shapeshiftss from '../assets/shapeshiftss.png'
import earwormss from '../assets/earwormss.png'
import weatherappss from '../assets/weatherappss.png'
import ssnotetaker from '../assets/ssnotetaker.png'

const projectsData = [
  {
    id: 1,
    title: 'ShapeShifters',
    description: 'ShapeShifters is a fitness blog where users can create an account and share their workouts/blog posts to other users on the website.',
    imageUrl: shapeshiftss,
    projectUrl: 'https://obscure-dawn-31918-e2d4b725bd63.herokuapp.com/',
    githubUrl: 'https://github.com/shawndreifuss/ShapeShift'
  },
  {
    id: 2,
    title: 'Earworm',
    description: 'Earworm is a lyric translation web application that allows users to translate their favorite song lyrics into any language!',
    imageUrl: earwormss,
    projectUrl: 'https://dariapressley.github.io/project-earworm/',
    githubUrl: 'https://github.com/DariaPressley/project-earworm'
  },
  {
    id: 3,
    title: 'Note Taker',
    description: 'Note taker application that allows you to add and delete notes that are stored on a local DB using express and deployed to Heroku. ',
    imageUrl: ssnotetaker,
    projectUrl: 'hhttps://murmuring-meadow-76888-5e7e38fa227c.herokuapp.com/',
    githubUrl: 'https://github.com/n8hoang/11-Express-Note-Taker'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'This application is a weather app that allows you to get a 5 day forecast from any city. This project uses the Open Weather API.',
    imageUrl: weatherappss,
    projectUrl: 'https://n8hoang.github.io/06-challenge-weather/',
    githubUrl: 'https://github.com/n8hoang/06-challenge-weather'
  },
];

const Portfolio = () => {
  return (
    <>
    {/* <Header/> */}
    <div className="container pt-36 min-h-screen mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Portfolio;
