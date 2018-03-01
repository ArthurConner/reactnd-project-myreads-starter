import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { SearchBooks } from './SearchBooks.js'
//import { MainCase } from './MainCase.js'
import { Link } from 'react-router-dom'



  class BookShelf extends React.Component {
    render() {
      const {books, title} = this.props
     
      return (
      

              <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">

      <ul>
        {books.map(book => (
          <li> 


          <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
      );
    }
  }
  



  class BooksApp extends React.Component {

    state = {
      books: [
        {
          "id": "ryan",
          "author": "Harper Lee",
          "title": "To Kill a Mockingbird",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        {
          "id": "ryan2",
          "author": "Harper Lee",
          "title": "To Kill a robin",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        {
          "id": "ryan",
          "author": "Bruce Lee",
          "title": "To Kill a Wilt",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        }
      ]
    }

    render() {
      return (
        <div className="App">

         <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
 
          <BookShelf books={this.state.books} title="bad idea"/>
          <BookShelf books={this.state.books} title="Currently Reading"/>
          <BookShelf books={this.state.books} title="Thinking about Reading"/>
        </div>
        </div>
        </div>
        </div>
        </div>

      );
    }
  }
  


export default BooksApp
/*

<Route exact path='/' render={() => (
  <MainCase />
)}/>
<Route path='/search' render={({ history }) => (
  <SearchBooks />
)}/>
*/

/*
  <div>
        <h1>up and running</h1>
        <MainCase />
        <h1>and out</h1>
      </div>
      */


      /*


      
      */