interface ILink {
  url: string;
  title: string;
}

export interface IPortfolioCard {
  title: string;
  stack: string[];
  imageUrl?: string;
  description: string;
  shortDescription: string;
  links: ILink[];
}

export const PORTFOLIO: IPortfolioCard[] = [
  {
    title: "Online Cinema",
    stack: [
      "Next.js",
      "TailwindCSS",
      "Nest.js",
      "PostgreSQL",
      "TypeScript",
      "Prisma",
      "JWT",
      "Nginx",
      "PM2",
    ],
    imageUrl: "/images/cinema-project.jpg",
    description:
      "Онлайн Кинотеатр - это платформа для просмотра фильмов онлайн. Это полнофункциональное приложение, позволяющее пользователям смотреть фильмы в интернете.",
    shortDescription: "Смотрите фильмы онлайн в любое время",
    links: [
      {
        url: "https://cinema.ilyacode.ru/",
        title: "Сайт",
      },
      {
        url: "https://github.com/K0rzet/online-cinema-frontend",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/online-cinema-backend",
        title: "Git: Backend",
      },
    ],
  },
  {
    title: "Amonic Airlines",
    stack: ["React.js", "SCSS", "Nest.js"],
    imageUrl: "/images/amonic-project.png",
    description:
      "Amonic Airlines - это платформа для бронирования авиабилетов. Это полнофункциональное приложение, позволяющее пользователям бронировать рейсы.",
    shortDescription: "Удобная система бронирования рейсов",
    links: [
      {
        url: "https://amonic.ilyacode.ru/login",
        title: "Сайт",
      },
      {
        url: "https://github.com/K0rzet/amonic-frontend",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/amonic-backend-nest",
        title: "Git: Backend",
      },
    ],
  },
  {
    title: "Planner",
    stack: ["Next.js", "SCSS", "TailwindCSS", "Nest.js"],
    imageUrl: "/images/planner-project.png",
    description:
      "Планировщик - это платформа для планирования мероприятий. Это полнофункциональное приложение, позволяющее пользователям планировать события.",
    shortDescription: "Организуйте события без усилий",
    links: [
      {
        url: "https://planner.ilyacode.ru/i",
        title: "Сайт",
      },
      {
        url: "https://github.com/K0rzet/planner-frontend",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/planner-backend",
        title: "Git: Backend",
      },
    ],
  },
  {
    title: "Олимп",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    imageUrl: "/images/olimp-project.png",
    description: "Олимп - строительная компания",
    shortDescription: "Строительная компания",
    links: [
      {
        url: "https://olimp.ilyacode.ru/",
        title: "Сайт",
      },
      {
        url: "https://github.com/K0rzet/npk",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/npkapi",
        title: "Git: Backend",
      },
    ],
  },
  {
    title: "Meme Factory",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    imageUrl: "/images/meme-factory-project.jpg",
    description:
      "p2p web3 проект, позволяющий зарабатывать на создании и публикации мемов",
    shortDescription: "Создавайте и зарабатывайте на мемах",
    links: [
      {
        url: "https://t.me/miniapped_v2_bot/",
        title: "Telegram Bot",
      },
      {
        url: "https://github.com/K0rzet/meme-factory-front",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/meme-factory-back",
        title: "Git: Backend",
      },
    ],
  },
  {
    title: "Nashi App Center",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    // imageUrl: "src/assets/images/olimp-project.png",
    description: "Мини приложение телеграм, отображающее список приложений",
    shortDescription: "Мини приложение телеграм",
    links: [
      {
        url: "https://t.me/PetAppCenter_Bot/",
        title: "Telegram Bot",
      },
      {
        url: "https://github.com/K0rzet/nashi-app-center-front-react",
        title: "Git: Frontend",
      },
      {
        url: "https://github.com/K0rzet/nashi-app-center-back-nest",
        title: "Git: Backend",
      },
    ],
  },
];
