import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Switch, Route } from 'react-router-dom'
import  SearchBooks  from './SearchBooks.js'
import MainCase from './MainCase.js'
import { connect } from 'react-redux'
import { loadBookShelf } from '../actions'

  class BooksApp extends React.Component {




/*
    moveBook = (book,value) => {

    
      var nextBooks = this.state.books.filter((c) => c.id !== book.id)
      book.shelf = value
      nextBooks.push(book)

      this.setState((state) => ({
        books: nextBooks
      }))
    }

*/

    // When the component mounts, we need to load out books from the AJAX call
    componentDidMount(){
      this.getAllBooks()
    }
  
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


    render() {

      const books = this.props.books

      let searchBooks = books

      /*
      if (this.state.searchResults.length === 0){
        searchBooks = books
      } else {
        searchBooks = this.state.searchResults
      }

      */
     console.log("adding books")
     console.log(books)

      return (
        <div>
          
            <Switch>
          <Route exact path='/' render={() => (
          <MainCase books={books} 
           />
          )}/>
          <Route path='/search' render={(props) => (
                   <SearchBooks 
                   books={searchBooks} 
                 />
          )}/>
          </Switch>
        

        </div>
      )
    }

  }
  

function mapStateToProps ({books}) {
  //console.log("mapping State in app.js ")
  //console.log(books)
  const mainBooks = Object.keys(books).map((key)=>{ return books[key]})
 // console.log("making State in app.js ")
  //console.log(mainBooks)
  return {books:mainBooks}
}

function mapDispatchToProps (dispatch) {
    return {
      loadBookShelf: (data) => dispatch(loadBookShelf(data))
    }
  }



export default connect(
  mapStateToProps, mapDispatchToProps
)(BooksApp)
