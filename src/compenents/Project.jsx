import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-5 m-4">
      <img className="w-full max-h-56 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center items-center gap-4"> {/* Added gap-4 for even spacing */}
        {projectUrl && ( // Conditional rendering if projectUrl is provided
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
            View Project
          </a>
        )}
        {githubUrl && ( // Conditional rendering if githubUrl is provided
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;