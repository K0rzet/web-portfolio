import React, { useState } from 'react'
import styles from './Portfolio.module.scss'
import { PORTFOLIO, IPortfolioCard } from './portfolio.data';
import PortfolioCard from './PortfolioCard';
import ProjectModal from '../ProjectModal/ProjectModal';
const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IPortfolioCard | null>(null);

  const openModal = (project: IPortfolioCard) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.portfolioTitle}>портфолио</h2>
      <div className={styles.portfolio}>
        {PORTFOLIO.map((item) => (
          <PortfolioCard key={item.title} {...item} onClick={() => openModal(item)} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Portfolio
