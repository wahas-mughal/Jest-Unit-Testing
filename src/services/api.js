export default class User{
  static getMovies(){
    return fetch('https://reactnative.dev/movies.json')
    .then((res) => res.json())
  }
}