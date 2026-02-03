const projects = [
  {
    name: "Color Flipper",
    image: "./images/project1.png",
    liveUrl: "https://ali8642.github.io/color-flipper-js/",
    githubUrl: "https://github.com/ali8642/color-flipper-js.git",
  },
  {
    name: "Counter",
    image: "./images/project2.png",
    liveUrl: "https://ali8642.github.io/counter-js/",
    githubUrl: "https://github.com/ali8642/counter-js.git",
  },
  {
    name: "Tic Tac Toe",
    image: "./images/project3.png",
    liveUrl: "https://ali8642.github.io/tic-tac-toe-js/",
    githubUrl: "https://github.com/ali8642/tic-tac-toe-js.git",
  },
  {
    name: "Reviews Tab",
    image: "./images/project4.png",
    liveUrl: "https://ali8642.github.io/review-tabs-js-assignment/",
    githubUrl: "https://github.com/ali8642/review-tabs-js-assignment.git",
  },
  {
    name: "Forkify Food Recipe",
    image: "./images/project5.png",
    liveUrl: "https://ali8642.github.io/forkify-food-recipe-api-assignment/",
    githubUrl:
      "https://github.com/ali8642/forkify-food-recipe-api-assignment.git",
  },
  {
    name: "Blog Web App",
    image: "./images/project6.png",
    liveUrl: "https://ali8642.github.io/Blog-Web-App-with-Local-Storage/",
    githubUrl: "https://github.com/ali8642/Blog-Web-App-with-Local-Storage.git",
  },
  {
    name: "To-Do App",
    image: "./images/project7.png",
    liveUrl: "https://ali8642.github.io/javascript-dom-todo-app/",
    githubUrl: "https://github.com/ali8642/javascript-dom-todo-app.git",
  },
  {
    name: "Search and Replace JS",
    image: "./images/project8.png",
    liveUrl:
      "https://ali8642.github.io/search-and-replace-function-javascript/",
    githubUrl:
      "https://github.com/ali8642/search-and-replace-function-javascript.git",
  },
  {
    name: "Web Calculator",
    image: "./images/project9.png",
    liveUrl: "https://ali8642.github.io/calculator-webapp/",
    githubUrl: "https://github.com/ali8642/calculator-webapp.git",
  },
  {
    name: "Complex Table Layout",
    image: "./images/project10.png",
    liveUrl: "https://ali8642.github.io/complex-table/",
    githubUrl: "https://github.com/ali8642/complex-table.git",
  },
];

const projectDiv = document.getElementById("projectDiv");

for (const project of projects) {
  const name = project.name;
  const image = project.image;
  const live = project.liveUrl;
  const github = project.githubUrl;

  const projectCard = `
  <div class="card" style="background-image: url(${image});">
            <div>${name}</div>
            <div class="btn">
                <button class="live"><a href="${live}" target="_blank">Live</a></button>
                <button class="github"><a href="${github}" target="_blank">Github</a></button>
            </div>
        </div>
  `;

  projectDiv.innerHTML += projectCard;
}
