const Movie = require("./utils");

console.log("Hello World!");

// shows where node is installed
// console.log(process.argv);

// example of building logic around terminal
// if (process.argv[2] === "steve") {
//   console.log("It is a wild Steve");
// } else {
//   console.log("THere is no wild Steve");
// }

// store the contents of terminal
// const app = (argv) => {
//   switch (argv[2]) {
//     case "Steve":
//       console.log("It is a wild Steve");
//       break;

//     case "Gary":
//       console.log("It is a wild Gary");
//       break;

//     default:
//       console.log("It is a nobody");
//       break;
//   }
// };

// TASK 1:
const app = (argv) => {
  // console.log(argv.slice(2));
  let arg = argv.slice(2, argv.length);
  const newMovie = new Movie();
  newMovie.add(arg);

  // console log the movies and et al.
  console.log(`This is the movie : ${newMovie.object.movie}`);
  console.log(`This is the director : ${newMovie.object.director}`);
  console.log(`This is the actor : ${newMovie.object.actor}`);

  // switch (argv[2]) {
  //   case "add":
  //     // add the movie
  //     // const movie = argv[3];
  //     // console.log(`Is your movie : ${movie}`);
  //     const newMovie = new Movie(argv[3], argv[4]);
  //     newMovie.add();

  //     break;

  //   default:
  //     console.log("You didnt add a movie");
  //     break;
  // }
};

app(process.argv);
