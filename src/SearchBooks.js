import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from "./BookShelf"

import { Link } from 'react-router-dom'


class SearchBooks extends Component {
  /*
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  */

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }


 
  render() {
  
    const { books, moveBook} = this.props

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
          <input type="text" placeholder="Search by title or author"/>

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