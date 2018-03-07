import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Switch, Route } from 'react-router-dom'
import  SearchBooks  from './SearchBooks.js'
import MainCase from './MainCase.js'
import { connect } from 'react-redux'
import { moveBook } from '../actions'

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
  //const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  console.log("mapping State in app.js ")
  console.log(books)
  return {books:books}
}

function mapDispatchToProps (dispatch) {
    return {
      moveBook: (data) => dispatch(moveBook(data))
    }
  }



export default connect(
  mapStateToProps, mapDispatchToProps
)(BooksApp)
