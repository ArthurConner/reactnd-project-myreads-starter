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
export function moveBook (x) {
 const {book, shelf } = x
 
 // console.log("making action for " + JSON.stringify(x , null, "    "))
 // console.log("shelf is " + shelf)
 // console.log("book is " + book)

  return (dispatch) =>{

    BooksAPI.update(book,shelf).then((result) => {

      dispatch( {
        type: MOVE_BOOK,
        book,
        shelf,
      })
    })
  }
}


export function searchTitle ({ query }) {
  return {
    type: SEARCH_TITLE,
    query,
  }
}


export function loadBookShelf () {

  //console.log("loading shelf")
  return (dispatch)=>{

    BooksAPI.getAll().then((books) => {
      //that.getAllBooks()

      dispatch( {
        type: LOAD_BOOKSHELF,
        books,
      })

    })
  }
  
 
}