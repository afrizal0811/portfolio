import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import { menuProps } from '../../constants/properties';
import { getCookie, setCookie } from '../../utilities/cookieUtils';
import ProjectImages from './ProjectImages';
import { getProjectChoicesList, initialChoicesList, projectList } from './projectData';
import './style.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const navigate = useNavigate();

  const [isInitialOptionSelected, setIsInitialOptionSelected] = useState(true);
  const [selectedMultiOption, setSelectedMultiOption] = useState(null);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [linkId, setLinkId] = useState(null);

  const hasVisitedBefore = getCookie();
  const isInitialView = !hasVisitedBefore && isInitialOptionSelected;
  const isProjectSelected = !isInitialView && isLinkClicked;

  // Nilai random dibuat sekali saat komponen mount, bukan setiap render
  const [randomSeed] = useState(() => Math.floor(Math.random() * 10));

  useEffect(() => {
    if (!isInitialOptionSelected) setCookie(true);

    if (selectedMultiOption === 0 && linkId !== null) {
      const selectedProject = projectList.find(({ id }) => id === linkId);
      if (!selectedProject) return;

      if (selectedProject.isPublic) {
        window.open(selectedProject.href);
      } else {
        navigate(selectedProject.href);
      }
    }

    setSelectedMultiOption(null);
  }, [isInitialOptionSelected, selectedMultiOption, linkId, navigate]);

  return (
    <motion.div
      ref={ref}
      className="wrapper"
      {...menuProps(isInView)}
    >
      {isInitialView ? (
        <Avatar
          isInView={isInView}
          choice={initialChoicesList}
          setIsInitialOptionSelected={setIsInitialOptionSelected}
        />
      ) : isProjectSelected ? (
        <Avatar
          isInView={isInView}
          choice={getProjectChoicesList(randomSeed)}
          linkId={linkId}
          setIsLinkClicked={setIsLinkClicked}
          setSelectedMultiOption={setSelectedMultiOption}
        />
      ) : (
        <div className="project-container">
          <div className="project-content">
            <ProjectImages
              projectList={projectList}
              setIsLinkClicked={setIsLinkClicked}
              setLinkId={setLinkId}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
