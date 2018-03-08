import * as BooksAPI from '../BooksAPI'
//import axios from 'axios'

export const MOVE_BOOK = 'MOVE_BOOK'
export const LOAD_BOOKSHELF = 'LOAD_BOOKSHELF'
export const SEARCH_TITLE = 'SEARCH_TITLE'



/*
    // This method fires off the AJAX call, and updates our state with the book list from the server
    getAllBooks(){
      BooksAPI.getAll().then((bookDict)=>{
        console.log("fetched remote books");
       // const books = Object.key(bookDict)
       // console.log(JSON.stringify(bookDict, null, "    "));
        //console.log(bookDict[0])
        const books = bookDict
        this.props.loadBookShelf({books})
       // this.setState({books})}
      })
    }
  
    // This method updates the book onto a new shelf
    updateBookShelf(book,shelf){
      var that = this
      BooksAPI.update(book,shelf).then((result) => {
        that.getAllBooks()
      })
    }



  updateQuery = (query)=> {

    console.log(query)

    }


*/
export function moveBook(x) {
  const { book, shelf } = x

  // console.log("making action for " + JSON.stringify(x , null, "    "))
  // console.log("shelf is " + shelf)
  // console.log("book is " + book)

  return (dispatch) => {

    BooksAPI.update(book, shelf).then((result) => {

      dispatch({
        type: MOVE_BOOK,
        book,
        shelf,
      })
    })
  }
}


export function searchTitle({ query }) {

  return (dispatch) => {
    
    BooksAPI.search(query).then((searchResults) => {

      console.log("got search result")
      console.log(searchResults)

      if (searchResults instanceof Array) {
        // Go through the searchResults and if a book is in the "book" list, set the book.shelf correctly,
        // otherwise set it to None
        //searchResults = searchResults.map((book) => { var foundbook = this.props.books.find(x => x.id === book.id); foundbook ? book.shelf = foundbook.shelf : book.shelf = 'none'; return book })
        dispatch({
          type: SEARCH_TITLE,
          query,
          searchResults
        })
      }
      else {
        console.log(searchResults)
        /*
        if (searchResults && searchResults.error)
          this.setState({error:searchResults.error})
        this.setState({searchResults:[]})
        */
      }
    })
  }
}



export function loadBookShelf() {

  //console.log("loading shelf")
  return (dispatch) => {

    BooksAPI.getAll().then((books) => {
      //that.getAllBooks()

      dispatch({
        type: LOAD_BOOKSHELF,
        books,
      })

    })
  }


}