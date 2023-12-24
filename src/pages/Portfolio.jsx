import React from 'react';
import Project from '../compenents/Project';
import shapeshiftss from '../assets/shapeshiftss.png'
import earwormss from '../assets/earwormss.png'
import weatherappss from '../assets/weatherappss.png'
import ssnotetaker from '../assets/ssnotetaker.png'
import schedulerss from '../assets/schedulerss.png'
import tgpss from '../assets/tgpss.png'
import employeasess from '../assets/employeasess.png'

const projectsData = [
  {
    id: 1,
    title: 'True Group Partners',
    description: 'Full-stack SPA for True Group Partners company',
    imageUrl: tgpss,
    projectUrl: 'https://radiant-ridge-84806-2b323e60307f.herokuapp.com/',
    githubUrl: 'https://github.com/n8hoang/True-Group-Partners'
  },
  {
    id: 2,
    title: 'EmployEase',
    description: 'EmployEase is a job board application with trello board and leaflet map.',
    imageUrl: employeasess,
    projectUrl: 'https://thawing-eyrie-65047-2d2e54b0acae.herokuapp.com/',
    githubUrl: 'https://github.com/jhuber1155/EmployEase'
  },
  {
    id: 3,
    title: 'ShapeShifters',
    description: 'ShapeShifters is a fitness blog where users can create an account and share their workouts/blog posts to other users on the website.',
    imageUrl: shapeshiftss,
    projectUrl: 'https://obscure-dawn-31918-e2d4b725bd63.herokuapp.com/',
    githubUrl: 'https://github.com/shawndreifuss/ShapeShift'
  },
  {
    id: 4,
    title: 'Earworm',
    description: 'Earworm is a lyric translation web application that allows users to translate their favorite song lyrics into any language!',
    imageUrl: earwormss,
    projectUrl: 'https://dariapressley.github.io/project-earworm/',
    githubUrl: 'https://github.com/DariaPressley/project-earworm'
  },
  {
    id: 5,
    title: 'Note Taker',
    description: 'Note taker application that allows you to add and delete notes that are stored on a local DB using express and deployed to Heroku. ',
    imageUrl: ssnotetaker,
    projectUrl: 'https://murmuring-meadow-76888-5e7e38fa227c.herokuapp.com/',
    githubUrl: 'https://github.com/n8hoang/11-Express-Note-Taker'
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'Retrieve a five-day weather forecast for any city through this sleek app, powered by the Open Weather API.',
    imageUrl: weatherappss,
    projectUrl: 'https://n8hoang.github.io/06-challenge-weather/',
    githubUrl: 'https://github.com/n8hoang/06-challenge-weather'
  },
  {
    id: 7,
    title: 'Work Scheduler',
    description: 'Simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). ',
    imageUrl: schedulerss,
    projectUrl: 'https://n8hoang.github.io/05-challenge/Develop/',
    githubUrl: 'https://github.com/n8hoang/05-challenge'
  }
];

const Portfolio = () => {
  return (
    
    <div className="container bg-slate-400 pt-36 min-h-screen min-w-full mx-auto px-4 py-8">
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
    
  );
};

export default Portfolio;
