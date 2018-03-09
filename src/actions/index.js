import * as BooksAPI from '../BooksAPI'
import axios from 'axios'
export const MOVE_BOOK = 'MOVE_BOOK'
export const LOAD_BOOKSHELF = 'LOAD_BOOKSHELF'
export const SEARCH_TITLE = 'SEARCH_TITLE'



const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function moveBook(x) {
  const {book, shelf} = x

  return (dispatch) => {

    const oldshelf = book.shelf

    dispatch({
      type: MOVE_BOOK,
      book,
      shelf,
    })

    const url = {
      method: 'PUT',
      url: `${api}/books/${book.id}`,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      data: {
        shelf
      }
    }

    console.log(url)
    axios(url)
      .then(function(response) {}).catch(function(error) {
      console.log("we have a move error")
      console.log(error);

      const action = {
        type: MOVE_BOOK,
        book,
        "shelf": oldshelf,
      }

      dispatch(action)

    });

  }

}


export function searchTitle({query}) {

  return (dispatch) => {
    axios({
      method: 'post',
      url: `${api}/search`,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        query
      })
    }).then(function(response) {
      const searchResults = response.data.books
      const action = {
        type: SEARCH_TITLE,
        query,
        searchResults,
      }

      dispatch(action)

    })
      .catch(function(error) {
        console.log("we have a loadbookshelf error")
        console.log(error);

        const searchResults = []
        const action = {
          type: SEARCH_TITLE,
          query,
          searchResults,
        }

        dispatch(action)

      });
  }


}

export function loadBookShelf() {

  return (dispatch) => {

    axios.get(`${api}/books`, {
      headers
    })
      .then(function(response) {
        const books = response.data.books

        const action = {
          type: LOAD_BOOKSHELF,
          books,
        }

        dispatch(action)

      })
      .catch(function(error) {
        console.log("we have a loadbookshelf error")
        console.log(error);
      });



  }


}