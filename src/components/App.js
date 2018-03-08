import React from 'react'

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
     // this.getAllBooks()
      this.props.loadBookShelf()
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
