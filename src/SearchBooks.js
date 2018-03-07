import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from "./BookShelf"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
  /*
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  */

  state = {
    searchResults: [],
    error: '',
    query:'',
    all:[]
  }


  clearQuery = () => {
    this.setState({ query: '' })
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    updatesearch:  PropTypes.func.isRequired
  }
 
  render() {
  
    const { books, moveBook,updatesearch} = this.props

    return (

        
      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to="/" >Close</Link>
     
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" 
          placeholder="Search by title or author"
          onChange={(event) => updatesearch(event.target.value)} 
          />

        </div>
      </div>
      <div className="search-books-results">
    <  BookShelf books={books} title="" moveBook={moveBook} />
      </div>
    </div>
    )
   



  }
}

export default SearchBooks