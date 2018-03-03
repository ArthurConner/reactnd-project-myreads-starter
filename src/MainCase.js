import React from 'react'
import BookShelf from "./BookShelf"
import { Link } from 'react-router-dom'

function makeShelf(opt,books,moveBook){
    const current = books.filter((book) => book.shelf === opt)
    const label = BookShelf.moveLookup[opt]
    return <BookShelf books={current} title={label} moveBook={moveBook} />
}

class MainCase extends React.Component {

    render() { 
        
     const { books, moveBook} = this.props
     const cats = BookShelf.movesItems.filter((cat) => cat !== "none")

      return (
       
        <div className="list-books" key="main_case_screen" >
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          <div>
            <div className="bookshelf">

            { cats.map((cat)=> makeShelf(cat,books,moveBook)) }
            
            
          </div>
         </div>
        </div>

               <div className="open-search">
            <Link
              to="/search"
              className="add-contact"
              >Add a book</Link>
            </div>

      </div>
      );
    }
  }

export default MainCase
