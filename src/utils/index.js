const sql = require("../db/connection");

connection.addUser = (username, pass) => {
    //const user = [pass, username];
    const usernameSql = "INSERT INTO users SET username = ?";
    const passwordSql = "INSERT INTO passwords SET pass = ?, userID = (SELECT id FROM users WHERE username = ?)";
    try {
      sql.query(usernameSql, username);
      sql.query(passwordSql, pass, username);
    } catch (error) {
      console.log(error);
    }
};

exports.moviesList = async (username) => {
    //const user = [username];
    const readMoviesSql = "SELECT title FROM movies WHERE userID = (SELECT id FROM users WHERE users.username = ?)"
    try {
      sql.query(readMoviesSql, username,
        (error, results) => {
          if (error) {
            console.error(error);
          }
          console.log(results);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  exports.updateMovie = (watched, rating, title, user, pass) => {
      const update = [watched, rating, title, user, pass];
      const updateSql = "UPDATE movie SET watched = ?, rating = ?, title = ? WHERE user = (SELECT id FROM users WHERE users.username = ? and users.pass = ?)";
      try {
          sql.query(updateSql, update)
      } catch (error) {
          console.log(error);
      }
  };

  exports.deleteMovie = (title, user, pass) => {
      const remove = [title, user, pass];
      const deleteSql = "DELETE FROM movie WHERE title = ? and user = (SELECT id FROM users WHERE users.username = ? and users.pass = ?)";
      try {
          sql.query(deleteSql, remove);
      } catch (error) {
          console.log(error);
      }
  }