import axios from "axios";

//const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
//const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
