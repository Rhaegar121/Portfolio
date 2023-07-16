import {
  tvshowbox, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers, recipeapp, trackbudget, carrental, guesstheword1, guesstheword2, guesstheword3, spacetravelers1, spacetravelers2, spacetravelers3, tictactoe1, tictactoe2, tictactoe3, tvshow1, tvshow2, tvshow3, metricswebapp1, metricswebapp2, recipeapp1, recipeapp2, recipeapp3, recipeapp4, recipeapp5, recipeapp6, trackbuget1, trackbuget2, trackbuget3, trackbuget4, trackbuget5, carrental1, carrental2, carrental3, carrental4, carrental5, carrental6, carrental7,
} from '../assets';

const technologies = [
  {
    stack: 'languages',
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: 'languages',
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: 'languages',
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: 'languages',
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  },
  {
    stack: 'frameworks',
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: 'frameworks',
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    stack: 'frameworks',
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: 'frameworks',
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: 'frameworks',
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    stack: 'tools',
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: 'tools',
    name: 'git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: 'tools',
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: 'tools',
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
  },
  {
    stack: 'tools',
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: 'tools',
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Car Rental App',
    desc: 'The Car Rental App is a full-stack app we built using React as Front-end and Ruby on Rails as the Back-end API with custom authentication. The users can see a list of cars to rent and add to their favorites. The users can also add a car to the list and delete a car from the list.',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    img: carrental,
    carousel: [carrental1, carrental2, carrental3, carrental4, carrental5, carrental6, carrental7],
    source_link: 'https://github.com/Rhaegar121/Car-Rental-front-end',
    live_link: 'https://car-rental-capstone.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipe App',
    desc: 'The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Since sharing recipes is an important part, it allows you to make them public so anyone can access them.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: recipeapp,
    carousel: [recipeapp1, recipeapp2, recipeapp3, recipeapp4, recipeapp5, recipeapp6],
    source_link: 'https://github.com/Rhaegar121/Recipe-App',
    live_link: 'https://recipe-app121-b8888e20687b.herokuapp.com/',
  },
  {
    id: 3,
    name: 'TV Shows Box',
    desc: 'TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'TVmaze API'],
    img: tvshowbox,
    carousel: [tvshow1, tvshow2, tvshow3],
    source_link: 'https://github.com/Rhaegar121/TVshows_Box',
    live_link: 'https://tvshowbox.netlify.app/',
  },
  {
    id: 4,
    name: 'Metrics Webapp',
    desc: 'Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.',
    tech: ['React', 'Redux', 'Openweather API'],
    img: metricwebapp,
    carousel: [metricswebapp1, metricswebapp2],
    source_link: 'https://github.com/Rhaegar121/Metrics-Webapp',
    live_link: 'https://metrics-webapp121.netlify.app/',
  },
  {
    id: 5,
    name: 'Track Budget App',
    desc: 'Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2, trackbuget3, trackbuget4, trackbuget5],
    source_link: 'https://github.com/Rhaegar121/Track-Budget',
    live_link: 'https://track-budget121-70a570d4e3e1.herokuapp.com/',
  },
  {
    id: 6,
    name: 'Math Magicians',
    desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    tech: ['React'],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: 'https://github.com/Rhaegar121/Math-Magicians',
    live_link: 'https://math-magicians121.netlify.app/',
  },
  {
    id: 7,
    name: 'Tic Tac Toe',
    desc: 'Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: 'https://github.com/Rhaegar121/Tic-Tac-Toe',
    live_link: 'https://rhaegar121.github.io/Tic-Tac-Toe/',
  },
  {
    id: 8,
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ['React', 'Redux', 'SpaceX API'],
    img: spacetravelers,
    carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
    source_link: 'https://github.com/Rhaegar121/React-Group-Project',
    live_link: 'https://space-travelers-hub121.netlify.app/',
  },
  {
    id: 9,
    name: 'Guess the word',
    desc: 'Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: guesstheword,
    carousel: [guesstheword1, guesstheword2, guesstheword3],
    source_link: 'https://github.com/Rhaegar121/Guess-the-word',
    live_link: 'https://rhaegar121.github.io/Guess-the-word/',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Wai Yan Phyo',
    image: 'https://media.licdn.com/dms/image/D5603AQHIGm84tR1dug/profile-displayphoto-shrink_800_800/0/1678261183344?e=1695254400&v=beta&t=oFLOl48sTPZ1JBs1anOQfAaGDGNuSIHQc97x66bbzbI',
    text: 'I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.',
    country: 'Myanmar',
    linkedIn: 'https://www.linkedin.com/in/oyhpnayiaw/',
  },
  {
    id: 2,
    name: 'Rachel Isaac',
    image: 'https://media.licdn.com/dms/image/D4D03AQHNmKfMktAzZg/profile-displayphoto-shrink_100_100/0/1665541121272?e=1695254400&v=beta&t=uPQxD-T0QdZDM5QZbt2vMDT8HgpdPJXaILTE4T_d5UM',
    text: "I have no doubt that Barry's exceptional technical abilities, strong work ethic, and a collaborative mindset will make them a valuable addition to any software development team. I wholeheartedly endorse Barry and would eagerly work with them again on future projects.",
    country: 'United Arab Emirates',
    linkedIn: 'https://www.linkedin.com/in/racheleno/',
  },
  {
    id: 3,
    name: 'Muhammad Talha Hanif',
    image: 'https://media.licdn.com/dms/image/D4D03AQF6A-cET7akGQ/profile-displayphoto-shrink_100_100/0/1687861229792?e=1695254400&v=beta&t=-7YBiGiJ8f5uaSE8G3qq0UuojrTJveVznlSub3lAOR4',
    text: "One of Barry's greatest strengths is his impressive technical expertise. He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease. Barry's ability to analyze problems, think critically, and devise innovative solutions sets him apart as a top performer.",
    country: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muhammad-talha-hanif/',
  },
];

export { technologies, projects, testimonials };
