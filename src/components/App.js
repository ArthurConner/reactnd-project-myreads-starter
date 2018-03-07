import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Switch, Route } from 'react-router-dom'
import  SearchBooks  from './SearchBooks.js'
import MainCase from './MainCase.js'


  class BooksApp extends React.Component {

    state = {
      books: [],
      searchResults: [],
      query:[]
    }

    // When the component mounts, we need to load out books from the AJAX call
    componentDidMount(){
      this.getAllBooks()
    }
  
    // This method fires off the AJAX call, and updates our state with the book list from the server
    getAllBooks(){
      BooksAPI.getAll().then((books)=>{
        console.log(books);
        
        this.setState({books})})
    }
  
    // This method updates the book onto a new shelf
    updateBookShelf(book,shelf){
      var that = this
      BooksAPI.update(book,shelf).then((result) => {
        that.getAllBooks()
      })
    }

    moveBook = (book,value) => {

    
      var nextBooks = this.state.books.filter((c) => c.id !== book.id)
      book.shelf = value
      nextBooks.push(book)

      this.setState((state) => ({
        books: nextBooks
      }))
    }




  updateQuery = (query)=> {

    console.log(query)
    /*
    if (query.length===0) {
      this.setState({query:''})
      this.setState({searchResults:[]})
  
    }
    else {
      this.setState({query:query})
      BooksAPI.search(query).then((searchResults) =>  {
  
  
      if (searchResults instanceof Array) {
        // Go through the searchResults and if a book is in the "book" list, set the book.shelf correctly,
        // otherwise set it to None
        searchResults = searchResults.map((book)=> { var foundbook=this.props.books.find( x=> x.id === book.id); foundbook? book.shelf=foundbook.shelf:book.shelf='none'; return book})
        this.setState({error:''})
        this.setState({searchResults:searchResults})
      }
      else {
        console.log(searchResults)
        if (searchResults && searchResults.error)
          this.setState({error:searchResults.error})
        this.setState({searchResults:[]})
      }
      })
    }
  */
    }


    render() {

      const books = this.state.books

      let searchBooks

      if (this.state.searchResults.length === 0){
        searchBooks = books
      } else {
        searchBooks = this.state.searchResults
      }

      return (
        <div>
          
            <Switch>
          <Route exact path='/' render={() => (
          <MainCase books={books} 
          moveBook={this.moveBook} />
          )}/>
          <Route path='/search' render={(props) => (
                   <SearchBooks 
                   books={searchBooks} 
                   moveBook={this.moveBook} 
                   updatesearch={this.updateQuery}/>
          )}/>
          </Switch>
        

        </div>
      )
    }



  }
  


export default BooksApp
