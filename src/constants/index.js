import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1, tvshowbox, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers, recipeapp, trackbudget, carrental, guesstheword1, guesstheword2, guesstheword3, spacetravelers1, spacetravelers2, spacetravelers3, tictactoe1, tictactoe2, tictactoe3, tvshow1, tvshow2, tvshow3, metricswebapp1, metricswebapp2, recipeapp3, recipeapp4, recipeapp6, trackbuget1, trackbuget2, trackbuget5, carrental1, carrental2, carrental3, responsive, react, fullstack,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kaungmyatkyaw/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/linthantkhai',
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/rhaegar_121',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/Rhaegar121',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/Rhaegar121',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'RSpec',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Car Rental App',
    desc: 'The Car Rental App is a comprehensive full-stack application where you can seamlessly explore an array of cars, search by name, delve into comprehensive car details, make reservations when logged in, manage reservations, add or delete cars in the database, and personalize your profile with ease.',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    img: carrental,
    carousel: [carrental1, carrental2, carrental3],
    source_link: 'https://github.com/Rhaegar121/Car-Rental-front-end',
    live_link: 'https://car-rental121.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipe App',
    desc: 'The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Since sharing recipes is an important part, it allows you to make them public so anyone can access them.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
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
    carousel: [trackbuget1, trackbuget2, trackbuget5],
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
    live_link: 'https://tic-tac-toe121.netlify.app/',
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
    live_link: 'https://guess-the-word121.netlify.app/',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Wai Yan Phyo',
    image: 'https://media.licdn.com/dms/image/D5603AQHIGm84tR1dug/profile-displayphoto-shrink_800_800/0/1678261183344?e=1695254400&v=beta&t=oFLOl48sTPZ1JBs1anOQfAaGDGNuSIHQc97x66bbzbI',
    text: 'I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic.',
    country: 'Myanmar',
    linkedIn: 'https://www.linkedin.com/in/oyhpnayiaw/',
  },
  {
    id: 2,
    name: 'Rachel Isaac',
    image: 'https://media.licdn.com/dms/image/D4D03AQHNmKfMktAzZg/profile-displayphoto-shrink_100_100/0/1665541121272?e=1695254400&v=beta&t=uPQxD-T0QdZDM5QZbt2vMDT8HgpdPJXaILTE4T_d5UM',
    text: "Throughout our collaboration, I was consistently impressed by Barry's professionalism, attention to detail, and ability to adapt to changing requirements.",
    country: 'United Arab Emirates',
    linkedIn: 'https://www.linkedin.com/in/racheleno/',
  },
  {
    id: 3,
    name: 'Muhammad Talha Hanif',
    image: 'https://media.licdn.com/dms/image/D4D03AQF6A-cET7akGQ/profile-displayphoto-shrink_100_100/0/1687861229792?e=1695254400&v=beta&t=-7YBiGiJ8f5uaSE8G3qq0UuojrTJveVznlSub3lAOR4',
    text: "One of Barry's greatest strengths is his impressive technical expertise. He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.",
    country: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muhammad-talha-hanif/',
  },
  {
    id: 4,
    name: 'Ahmed Hasan Rony',
    image: 'https://avatars.githubusercontent.com/u/77187003?v=4',
    text: 'I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/ahroniy/',
  },
  {
    id: 5,
    name: 'Innocent N.',
    image: 'https://media.licdn.com/dms/image/D5603AQE1qYMUswBOAw/profile-displayphoto-shrink_400_400/0/1688151357954?e=1697068800&v=beta&t=gt456pj65ufvNW4tdFBjqpPXpqPPZbFxaFBCI-H3XGk',
    text: 'Communication was another strength that Barry brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.',
    country: 'Rwanda',
    linkedIn: 'https://www.linkedin.com/in/innocent-n/',
  },
  {
    id: 6,
    name: 'Marko Kermichiev',
    image: 'https://avatars.githubusercontent.com/u/112749658?v=4',
    text: 'I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.',
    country: 'North Macedonia',
    linkedIn: 'https://www.linkedin.com/in/marko-kermichiev/',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'Enhancing user engagement through fluid and adaptable designs that seamlessly transition across devices and screen sizes.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'Crafting captivating interfaces with cutting-edge technologies to ensure dynamic and user-friendly web experiences.',
  },
  {
    id: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
    title: 'Back-end Development',
    text: 'Building the engine behind your applications, enabling robust functionality, and efficient data management.',
  },
  {
    id: 4,
    icon: fullstack,
    title: 'Full-stack Development',
    text: 'From pixel to database, I create holistic solutions that harmonize frontend finesse with backend power.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
