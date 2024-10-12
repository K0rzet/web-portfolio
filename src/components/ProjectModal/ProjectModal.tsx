import React from "react";
import styles from "./ProjectModal.module.scss";
import { IPortfolioCard } from "../Portfolio/portfolio.data";
interface ProjectModalProps {
  project: IPortfolioCard;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.projectImage}
        />
        <p>{project.description}</p>
        <div className={styles.stackContainer}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.linksContainer}>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
