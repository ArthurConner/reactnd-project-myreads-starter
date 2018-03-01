import React, { Component } from 'react'



class BookShelf extends React.Component {
    render(){

        const {books, title} = this.props

  return (

    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
    <ul className='contact-list'>
      {books.map((book) => (

          
        <li key={book.id} className='contact-list-item'>


                 


<div className="book">
<div className="book-top">
  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `"url(${book.backgroundImage})"` }}></div>
  <div className="book-shelf-changer">
    <select>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
</div>
<div className="book-title">{book.title}</div>
<div className="book-authors">{book.author}</div>
</div>
</li>

      
       
      ))}
    </ul>
    </div>
    </div>
  )
}


}



class MainCase extends React.Component {


    render() { 
        
      const { books, title} = this.props

      return (
       

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
 
          <BookShelf books={books} title="bad foo"/>
          <BookShelf books={books} title="Currently Reading"/>
          <BookShelf books={books} title="Thinking about Reading"/>
        </div>
        </div>
        </div>
        </div>
       

      );
    }
  }

export default MainCase
