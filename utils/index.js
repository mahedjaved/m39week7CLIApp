const movieArr = [];

class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }

  // now to make a method that adds title and actor to a variable
  add() {
    movieArr.push(this);
    console.log(this);
  }
}

module.exports = Movie;
