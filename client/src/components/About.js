import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assests/images/MyPhoto.jpg';
import { fetchCertifications } from '../store/certificationSlice';
import { fetchAwards } from '../store/awardSlice';
import { useDispatch, useSelector } from 'react-redux';

const About = () => {
  const [selectedSection, setSelectedSection] = useState('whoami');
  const dispatch = useDispatch();

  const certifications = useSelector((state) => state.certifications.certifications);
  const certificationsStatus = useSelector((state) => state.certifications.status);
  const certificationsError = useSelector((state) => state.certifications.error);

  const awards = useSelector((state) => state.awards.awards);
  const awardsStatus = useSelector((state) => state.awards.status);
  const awardsError = useSelector((state) => state.awards.error);

  useEffect(() => {
    if (certificationsStatus === 'idle') {
      dispatch(fetchCertifications());
    }
    if (awardsStatus === 'idle') {
      dispatch(fetchAwards());
    }
  }, [certificationsStatus, awardsStatus, dispatch]);

  const renderSection = () => {
    switch (selectedSection) {
      case 'whoami':
        return (
          <div className='md:flex md:space-x-4'>
            <div className='max-w-3xl'>
              <h1 className='md:hidden text-3xl font-medium mt-4'>Who am i?</h1>
              <p className='mt-2 font-medium text-black dark:text-slate-300'>
                Hello! I'm Dattaprasad Chavan, a B.Tech graduate in Electronics and Telecommunication with a strong passion for software development. Over the course of my academic journey and personal projects, I’ve developed a deep interest in programming, problem-solving, and creating innovative software solutions. I believe that technology has the power to solve real-world problems, and I am excited to contribute my skills to the field of software development.
              </p>
              <p className='mt-2 font-medium text-black dark:text-slate-300'>
                I began my journey as a software developer in January 2018 and have since accumulated over six years of experience across various technologies. I believe that change is the only constant, which drives my passion for exploring new tools and frameworks. Initially starting as a backend developer, I have become a self-learner, embracing frontend technologies like JavaScript and React.js. I have a keen interest in system design, data structures, algorithms, and problem-solving techniques, and I enjoy developing a wide range of applications.
              </p>
              <p className='mt-2 font-medium text-black dark:text-slate-300'>
                I am proficient in several programming languages, including JavaScript, C++, and Basic Java, and I am particularly passionate about backend development and algorithmic problem-solving. I also have experience with technologies such as JavaScript, Node.js, React, and SQL. My interests lie in building scalable applications, improving software performance, and exploring areas such as AI and machine learning.
              </p>
            </div>
            <div>
              <img src={profileImage} alt='Dattaprasad Chavan' className='rounded-full md:rounde-lg h-fit w-screen md:h-30 md:w-60 md:mt-4'/>
            </div>
          </div>
        );
      case 'education':
        return (
          <div>
            <h1 className='md:hidden text-3xl font-medium mt-4'>Education</h1>
            <p className='mt-2 font-medium max-w-6xl text-black dark:text-slate-300'>
              I am a B.Tech graduate in Electronics and Telecommunication with a keen interest in software development. I am passionate about utilizing my programming skills to solve complex problems and design efficient solutions. I aim to integrate my technical expertise with my programming abilities in a dynamic software development role.
            </p>
            <p className='mt-2 font-medium max-w-6xl text-black dark:text-slate-300'>
              During my B.Tech in Electronics and Telecommunication, I developed a strong foundation in problem-solving and systems design. Over time, I realized my passion for software development, which led me to explore programming languages such as JavaScript and C++. I am eager to apply both my hardware knowledge and my highly growing programming skills in a career focused on software development.
            </p>
          </div>
        );
      case 'certifications':
        return (
          <div>
            <h1 className='md:hidden  text-3xl font-medium mt-4'>Certifications and Awards</h1>
            {certificationsStatus === 'loading' && <p>Loading certifications...</p>}
            {certificationsStatus === 'failed' && <p>Error: {certificationsError}</p>}
            {certificationsStatus === 'succeeded' && (
              <>
                <h2 className='text-2xl font-medium mt-4'>Certifications</h2>
                <ul className='list-decimal list-inside max-w-6xl'>
                  {certifications.map((certification) => (
                    <li key={certification._id} className='my-2'>
                      <span className='font-bold'>{certification.certificationName}</span> : <span>{certification.description}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {awardsStatus === 'loading' && <p>Loading awards...</p>}
            {awardsStatus === 'failed' && <p>Error: {awardsError}</p>}
            {awardsStatus === 'succeeded' && (
              <>
                <h2 className='text-2xl font-medium mt-4'>Awards</h2>
                <ul className='list-decimal list-inside max-w-6xl'>
                  {awards.map((award) => (
                    <li key={award._id} className='my-2'>
                      <span className='font-bold'>{award.awardName}</span> : <span>{award.description}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col items-center justify-start">
      <div className="w-full md:w-auto bg-slate-50 dark:bg-gray-800 min-h-screen px-4">
        <div className="flex flex-row mt-1 py-1 md:my-4 bg-slate-200 dark:bg-blue-950 rounded-full">
          <div
            className={`flex items-center justify-center w-full text-xl pb-1 rounded-full ${
              selectedSection === "whoami"
                ? "font-bold bg-slate-500 dark:bg-slate-400"
                : ""
            }`}
            onClick={() => setSelectedSection("whoami")}
          >
            <button className="">
              <span className="block md:hidden">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </span>
              <span className="hidden md:block">Who am I?</span>
            </button>
          </div>
          <div
            className={`flex items-center justify-center w-full text-xl pb-1 rounded-full ${
              selectedSection === "education"
                ? "font-bold bg-slate-500 dark:bg-slate-400"
                : ""
            }`}
            onClick={() => setSelectedSection("education")}
          >
            <button>
              <span className="block md:hidden">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
              </span>
              <span className="hidden md:block">Education</span>
            </button>
          </div>
          <div
            className={`flex items-center justify-center w-full text-xl pb-1 rounded-full ${
              selectedSection === "certifications"
                ? "font-bold bg-slate-500 dark:bg-slate-400"
                : ""
            }`}
            onClick={() => setSelectedSection("certifications")}
          >
            <button>
              <span className="block md:hidden">
                <FontAwesomeIcon icon={faAward} className="text-2xl" />
              </span>
              <span className="hidden md:block">Certifications and Awards</span>
            </button>
          </div>
        </div>
        {renderSection()}
        <p className="mt-4 font-medium md:text-xl max-w-6xl text-black dark:text-slate-300">
          Feel free to explore my portfolio and check out some of my{" "}
          <Link to="/projects" className="text-blue-500 dark:text-blue-300">
            work
          </Link>
          . I’m always open to discussing new projects, ideas, and
          opportunities.{" "}
          <Link to="/contacts" className="text-blue-500 dark:text-blue-300">
            Let’s connect!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default About;
