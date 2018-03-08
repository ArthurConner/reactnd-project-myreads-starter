import React from 'react'
import sortBy from 'sort-by'
import { moveBook } from '../actions'
import { connect } from 'react-redux'


function makeSelect(book,opt){
    const key = "SelectOption_" + book.id + "_" + opt
    
    if (book.shelf === opt ){
        return <option value={opt} key={key} selected="selected" >{BookShelf.moveLookup[opt]}</option>
    }
    
    return  <option value={opt}  key={key}  >{BookShelf.moveLookup[opt]}</option>
}

class BookShelf extends React.Component {

 
    static  movesItems = ["currentlyReading","wantToRead","read","none"]
    static  moveLookup = {"none":"None",   
                            "currentlyReading":"Currently Reading",
                            "wantToRead":"Want to Read",
                            "read":"Read"}


    render(){
        let {books, title} = this.props
        books.sort(sortBy('title'))


  return (
     <div className="bookshelf" key="bookshelf_{title}">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                { 
                books.map((book) => (
                    <li key={book.id} className='contact-list-item'>
                    <div className="book">
                    <div className="book-top">
                    {book.imageLinks && (
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    )}

                    <div className="book-shelf-changer">
                        <select 
                        
                        onChange={(event) => {

                           // console.log(event.target.value); 
                           const callMe = {book:book,shelf:event.target.value}
                            //console.log("moving the following:"+JSON.stringify(callMe, null, "    ")); 
                            this.props.moveBook(callMe)
                            } }>
                            
                            <option value="none" disabled>Move to...</option>
                            { BookShelf.movesItems.map((foo) => makeSelect(book,foo)) }
                        </select>
                    </div>
                </div>

                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>      
                ))}
            </ol>
        </div>
    </div>
  )
}


}



  
  function mapDispatchToProps (dispatch) {
      return {
        moveBook: (data) => dispatch(moveBook(data))
      }
    }



export default connect(
    null, mapDispatchToProps
  )(BookShelf)

