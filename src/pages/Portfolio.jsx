import React from 'react';
import Project from '../compenents/Project';
import shapeshiftss from '../assets/shapeshiftss.png'
import earwormss from '../assets/earwormss.png'
import weatherappss from '../assets/weatherappss.png'
import ssnotetaker from '../assets/ssnotetaker.png'
import schedulerss from '../assets/schedulerss.png'
import codequizss from '../assets/codequizss.png'

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
    projectUrl: 'https://murmuring-meadow-76888-5e7e38fa227c.herokuapp.com/',
    githubUrl: 'https://github.com/n8hoang/11-Express-Note-Taker'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Retrieve a five-day weather forecast for any city through this sleek app, powered by the Open Weather API.',
    imageUrl: weatherappss,
    projectUrl: 'https://n8hoang.github.io/06-challenge-weather/',
    githubUrl: 'https://github.com/n8hoang/06-challenge-weather'
  },
  {
    id: 5,
    title: 'Work Scheduler',
    description: 'Simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). ',
    imageUrl: schedulerss,
    projectUrl: 'https://n8hoang.github.io/05-challenge/Develop/',
    githubUrl: 'https://github.com/n8hoang/05-challenge'
  },
  {
    id: 6,
    title: 'JS Coding Quiz',
    description: 'A Timed, 10-Question Multiple-Choice Quiz to Assess Your Mastery of the JavaScript Fundamentals',
    imageUrl: codequizss,
    projectUrl: 'https://n8hoang.github.io/04-Challenge--Code-Quiz',
    githubUrl: 'https://github.com/n8hoang/04-Challenge--Code-Quiz'
  },
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
