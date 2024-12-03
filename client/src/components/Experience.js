import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperiences } from '../store/experienceSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faMapMarkerAlt, faTools, faTrophy, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../utils/DateTimeUtils';


const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);
  const experienceStatus = useSelector((state) => state.experience.status);
  const error = useSelector((state) => state.experience.error);
  const [visibleItems, setVisibleItems] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    if (experienceStatus === 'idle') {
      dispatch(fetchExperiences());
    }
  }, [experienceStatus, dispatch]);

  useEffect(() => {
    if (experienceStatus === 'succeeded') {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index'), 10);
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
                observer.current.unobserve(entry.target);
              }, index * 100); // Adjust the delay as needed
            }
          });
        },
        { threshold: 0.1 }
      );

      const items = document.querySelectorAll('.experience-item');
      items.forEach((item) => observer.current.observe(item));

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }
  }, [experienceStatus, experiences]);

  let content;

  if (experienceStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (experienceStatus === 'succeeded') {
    content = (
      <ul className="space-y-2">
        {experiences.map((experience, index) => (
          <li
            key={experience._id}
            data-index={index}
            className={`experience-item space-y-2 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 transform transition-transform duration-1000 ${
              visibleItems.includes(index) ? "rotate-y-0" : "rotate-y-180"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              {experience.companyName}
            </h2>
            <div className="md:flex md:space-x-4"> 
              <p className="text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                {experience.jobTitle}
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {formatDate(experience.startDate)} -{" "}
                {experience.endDate
                  ? formatDate(experience.endDate)
                  : "Present"}
              </p>
              {experience.location && (
                <p className="text-gray-700 dark:text-gray-400">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {experience.location}
                </p>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              {experience.jobDescription}
            </p>
            {experience.skillsUsed.length > 0 && (
              <p className="text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon icon={faTools} className="mr-2" />
                Skills: {experience.skillsUsed.join(", ")}
              </p>
            )}
            {experience.technologies.length > 0 && (
              <p className="text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon icon={faTools} className="mr-2" />
                Technologies: {experience.technologies.join(", ")}
              </p>
            )}
            {experience.achievements.length > 0 && (
              <div className="text-gray-700 dark:text-gray-400">
                <h3 className="font-bold text-gray-700 dark:text-gray-300">
                  <FontAwesomeIcon icon={faTrophy} className="mr-2" />
                  Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="">
                      {achievement}.
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  } else if (experienceStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className="container mx-auto md:p-4 md:w-11/12">
      {content}
    </div>
  );
};

export default Experience;