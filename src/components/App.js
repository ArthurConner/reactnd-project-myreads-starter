import React from 'react'

import '../App.css'
import {Switch, Route } from 'react-router-dom'
import  SearchComponent  from './SearchBooks.js'
import MainCase from './MainCase.js'
import { connect } from 'react-redux'
import { loadBookShelf } from '../actions'
import { withRouter } from 'react-router'



  class BooksApp extends React.Component {


    // When the component mounts, we need to load out books from the AJAX call
    componentDidMount(){
      this.props.loadBookShelf()
    }
  

    render() {

      const books = this.props.books
      const searchBooks = this.props.searchResults
      const query = this.props.query

      return (
        <div>
          
            <Switch>
          <Route exact path='/' render={() => (
          <MainCase books={books} 
           />
          )}/>
          <Route path='/search' render={() => (
                   <SearchComponent 
                   books={searchBooks}
                   query={query} 
                 />
          )}/>
          </Switch>
        

        </div>
      )
    }

  }
  

function mapStateToProps ({books,searchResults,query}) {
  const mainBooks = Object.keys(books).map((key)=>{ return books[key]})
  return {books:mainBooks,searchResults,query}
}

function mapDispatchToProps (dispatch) {
    return {
      loadBookShelf: (data) => dispatch(loadBookShelf(data))
    }
  }



export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(BooksApp))
