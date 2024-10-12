import React from "react";
import styles from "./Portfolio.module.scss";
import { IPortfolioCard } from "./portfolio.data";

interface PortfolioCardProps extends IPortfolioCard {
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  stack,
  imageUrl,
  shortDescription,
  onClick,
}) => {
  return (
    <div className={styles.portfolioCard} onClick={onClick}>
      {imageUrl ? (
        <div
          className={styles.portfolioCard__image}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className={styles.portfolioCard__fallback}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={`${styles.portfolioCard__content} ${!imageUrl ? styles['portfolioCard__content--no-image'] : ''}`}>
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <div className={styles.portfolioCard__stack}>
          {stack.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
