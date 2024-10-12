import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Илья Буторин</h1>
      <h2>Frontend-разработчик</h2>
      
      <section className={styles.contacts}>
        <h3>Контакты:</h3>
        <ul>
          <li>Телефон: +79143233634</li>
          <li>Email: ehot2004@gmail.com</li>
          <li>Город: Балашиха, Россия</li>
          <li>GitHub: <a href="https://github.com/K0rzet" target="_blank" rel="noopener noreferrer">https://github.com/K0rzet</a></li>
        </ul>
      </section>
      
      <section className={styles.summary}>
        <h3>Краткое профессиональное резюме:</h3>
        <p>Опытный frontend-разработчик с навыками fullstack-разработки. Специализируюсь на создании современных веб-приложений с использованием React.js и Next.js. Имею опыт разработки Telegram mini apps и веб-сайтов. Постоянно совершенствую свои навыки, работая над pet-проектами и изучая новые технологии.</p>
      </section>
      
      <section className={styles.skills}>
        <h3>Технические навыки:</h3>
        <ul>
          <li>HTML5, CSS3, SCSS</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React.js, Next.js, Redux, Jotai</li>
          <li>Vite, Git, Jest</li>
          <li>Python, Django</li>
          <li>Selenium, Mocha</li>
          <li>Framer Motion</li>
          <li>MixPanel</li>
        </ul>
      </section>
      
      <section className={styles.experience}>
        <h3>Опыт работы:</h3>
        <div className={styles.job}>
          <h4>Fullstack-разработчик | Проект meme-factory</h4>
          <p>Разработка Telegram mini app с использованием React, Nest.js и TypeScript</p>
          <p>Цель: Создание платформы для продвижения компаний через медиа-сервисы</p>
          <ul>
            <li>Интерфейс для заказчиков по размещению заказов на продвижение</li>
            <li>Система для исполнителей по публикации контента с символикой заказчика</li>
            <li>Реализация полного стека технологий для создания интерактивного и отзывчивого приложения</li>
          </ul>
        </div>
        {/* Добавьте остальные проекты по аналогии */}
      </section>
      
      {/* Добавьте остальные секции (Pet-проекты, Образование, Языки, Дополнительные навыки) по аналогии */}
    </div>
  );
};

export default Home;
