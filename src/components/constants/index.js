const technologies = [
    {
      name: "HTML 5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      name: "CSS 3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" ,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      name: "Ruby",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
    },
    {
      name: "Npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  ];

const projects = [
  {
    name: "TV Shows Box",
    desc: "TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.",
    tech: ["JavaScript", "TVmaze API"],
    img: "https://picsum.photos/id/32/300/250",
    source_link: "https://github.com/Rhaegar121/TVshows_Box",
    live_link: "https://rhaegar121.github.io/TVshows_Box/dist/",
  },
  {
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ["React", "SpaceX API"],
    img: "https://picsum.photos/id/344/300/250",
    source_link: "https://github.com/Rhaegar121/React-Group-Project",
    live_link: "",
  },
  {
    name: "Metrics Webapp",
    desc: "Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.",
    tech: ["React", "Openweather API"],
    img: "https://picsum.photos/id/347/300/250",
    source_link: "https://github.com/Rhaegar121/Metrics-Webapp",
    live_link: "",
  },
  {
    name: "To Do List",
    desc: "To Do List Project is a tool that helps to organize your day with light and dark theme. It simply lists the things that you need to do and allows you to mark them as complete. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "https://picsum.photos/id/65/300/250",
    source_link: "https://github.com/Rhaegar121/To-Do-list",
    live_link: "https://rhaegar121.github.io/To-Do-list/dist/",
  },
  {
    name: "Awesome Books",
    desc: "Awesome Books Project is a simple website that displays a list of books and allows you to add and remove books from that list. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "https://picsum.photos/id/37/300/250",
    source_link: "https://github.com/Rhaegar121/Awesome-Books-ES6",
    live_link: "https://rhaegar121.github.io/Awesome-Books-ES6/",
  },
  {
    name: "WDET Summit",
    desc: "This project is the World Economy & Technology summit website based on the design of Cindy Shin in Behance which contains both mobile and desktop versions and consists of two pages (home and about pages). Built with HTML, CSS, and Javascript in Microverse Module 1.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "https://picsum.photos/id/30/300/250",
    source_link: "https://github.com/Rhaegar121/WDET-Summit",
    live_link: "https://rhaegar121.github.io/WDET-Summit/",
  },
];

export { technologies, projects };