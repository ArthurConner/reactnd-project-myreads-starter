import React, { Component } from 'react';
//import sortBy from 'sort-by'
//import escapeRegExp from 'escape-string-regexp'
import BookShelf from "./BookShelf"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchTitle } from '../actions'

class SearchComponent extends Component {
  /*
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  */



  clearQuery = () => {
    this.setState({
      query: ''
    })
  }


  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {

    const updatesearch = ""

    const {books, query} = this.props

    let placeholder
    if (query === "") {
      placeholder = "Search by title or author"
    } else {
      placeholder = query
    }
    console.log("got query")
    console.log(query)
    return (


      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to="/" >Close</Link>
     
        <div className="search-books-input-wrapper">
          { /*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */ }
          <input type="text"
      placeholder={placeholder}
      onChange={(event) => this.props.searchTitle({
        query: event.target.value
      })}
      />

        </div>
      </div>
      <div className="search-books-results">
    <  BookShelf books={books} title=""/>
      </div>
    </div>
    )




  }
}


function mapDispatchToProps(dispatch) {
  return {
    searchTitle: (data) => dispatch(searchTitle(data))
  }
}



export default connect(
  null, mapDispatchToProps
)(SearchComponent)

