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
    imageUrl: "src/assets/images/cinema-project.jpg",
    description:
      "Онлайн Кинотеатр - это платформа для просмотра фильмов онлайн. Это полнофункциональное приложение, позволяющее пользователям смотреть фильмы в интернете.",
    shortDescription: "Смотрите фильмы онлайн в любое время",
    links: [
      {
        url: "https://online-cinema-frontend.vercel.app/",
        title: "Online Cinema",
      },
    ],
  },
  {
    title: "Amonic Airlines",
    stack: ["React.js", "SCSS", "Nest.js"],
    imageUrl: "src/assets/images/amonic-project.png",
    description:
      "Amonic Airlines - это платформа для бронирования авиабилетов. Это полнофункциональное приложение, позволяющее пользователям бронировать рейсы.",
    shortDescription: "Удобная система бронирования рейсов",
    links: [
      {
        url: "https://amonic-airlines-frontend.vercel.app/",
        title: "Amonic Airlines",
      },
    ],
  },
  {
    title: "Planner",
    stack: ["Next.js", "SCSS", "TailwindCSS", "Nest.js"],
    imageUrl: "src/assets/images/planner-project.png",
    description:
      "Планировщик - это платформа для планирования мероприятий. Это полнофункциональное приложение, позволяющее пользователям планировать события.",
    shortDescription: "Организуйте события без усилий",
    links: [
      {
        url: "https://planner-frontend.vercel.app/",
        title: "Planner",
      },
    ],
  },
  {
    title: "Олимп",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    imageUrl: "src/assets/images/olimp-project.png",
    description:
      "Планировщик - это платформа для планирования мероприятий. Это полнофункциональное приложение, позволяющее пользователям планировать события.",
    shortDescription: "Организуйте события без усилий",
    links: [
      {
        url: "https://planner-frontend.vercel.app/",
        title: "Planner",
      },
    ],
  },
  {
    title: "Meme Factory",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    imageUrl: "src/assets/images/meme-factory-project.jpg",
    description:
      "Планировщик - это платформа для планирования мероприятий. Это полнофункциональное приложение, позволяющее пользователям планировать события.",
    shortDescription: "Организуйте события без усилий",
    links: [
      {
        url: "https://planner-frontend.vercel.app/",
        title: "Planner",
      },
    ],
  },
  {
    title: "Nashi App Center",
    stack: ["React.js", "SCSS", "TailwindCSS", "Django"],
    // imageUrl: "src/assets/images/olimp-project.png",
    description:
      "Планировщик - это платформа для планирования мероприятий. Это полнофункциональное приложение, позволяющее пользователям планировать события.",
    shortDescription: "Организуйте события без усилий",
    links: [
      {
        url: "https://planner-frontend.vercel.app/",
        title: "Planner",
      },
    ],
  },
];
