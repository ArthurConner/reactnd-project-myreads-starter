import React, { Component } from 'react'
import sortBy from 'sort-by'


class BookShelf extends React.Component {
    render(){

        const {books, title, moveBook} = this.props

  return (

    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
    <ol className="books-grid">
      {books.map((book) => (

          
        <li key={book.id} className='contact-list-item'>

<div className="book">
<div className="book-top">
  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `"url(${book.backgroundImage})"` }}></div>
  <div className="book-shelf-changer">
    <select
    onChange = {(event)=>moveBook(book,event.target.value)}
    >
      <option value="none" disabled>Move to...</option>
      <option value="none">None</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
     
    </select>
  </div>
</div>

<div className="book-title">{book.title}</div>
<div className="book-authors">{book.author}</div>
<div className="book-authors">{book.shelf}</div>
</div>
</li>      
      ))}
    </ol>
    </div>
    </div>
  )
}


}



class MainCase extends React.Component {


    render() { 
        
      const { books, moveBook} = this.props


      let current = books.filter((book) => book.shelf === "currentlyReading")
      current.sort(sortBy('title'))
      let want =  books.filter((book) => book.shelf === "wantToRead")
      want.sort(sortBy('title'))
      let haveRead =  books.filter((book) => book.shelf === "read")
      haveRead.sort(sortBy('title'))

    
      return (
       

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">

          <BookShelf books={current} title="Currently Reading" moveBook={moveBook} />
          <BookShelf books={want} title="Want To Read"  moveBook={moveBook} />
          <BookShelf books={haveRead} title="Read"  moveBook={moveBook}/>
        </div>
        </div>
        </div>
        </div>
       

      );
    }
  }

export default MainCase
