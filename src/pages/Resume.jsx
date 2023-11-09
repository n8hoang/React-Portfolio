import Header from '../compenents/Header';
import React from 'react';
import resume from '../assets/sampleresumetemplate.pdf'

const Resume = () => {
  // You should host your resume on the public folder or any other static file server
  // and replace the `path_to_your_resume.pdf` with the URL to the resume file.
  const resumeLink = resume; // sample resume , change to my resume when completed

  return (
    <>
      {/* <Header /> */}
      {/* Flex container to center children */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center pb-20 pt-36">
          <h1 className="text-4xl text-gray-800 font-bold mb-6">
            You can download my resume by clicking the link below.
          </h1>
          <a
            href={resumeLink}
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
