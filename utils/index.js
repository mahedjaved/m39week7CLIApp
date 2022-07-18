class Movie {
  constructor() {
    this.object = {
      movie: [],
      actor: [],
      director: [],
    };
  }

  // now to make a method that adds title and actor to a variable
  add(consoleArg = "no args") {
    // assuming users input in the order "movie, actor, director ... movie, actor, direct ... so no and so forth"
    for (let i = 0; i < consoleArg.length; i = i + 3) {
      this.object.movie.push(consoleArg[i]);
      this.object.actor.push(consoleArg[i + 1]);
      this.object.director.push(consoleArg[i + 2]);
    }
  }
}

module.exports = Movie;
