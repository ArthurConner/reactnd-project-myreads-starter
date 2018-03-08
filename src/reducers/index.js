

import {
  MOVE_BOOK,
  SEARCH_TITLE,
  LOAD_BOOKSHELF
  } from '../actions'
  
  const initialTestCalendarState = {

   
      books: {
        "ryan":{
          "id": "ryan",
          "shelf": "currentlyReading",
          "author": "Harper Lee",
          "title": "To Kill a Mockingbird",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        "ryan2":{
          "id": "ryan2",
          "shelf": "currentlyReading",
          "author": "Harper Lee",
          "title": "To Kill a robin",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        "ryan3":{
          "id": "ryan3",
          "shelf": "wantToRead",
          "author": "Bruce Lee",
          "title": "To Kill a Wilt",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        }
      },

      searchResults:[

        {
          "id": "ryan2",
          "shelf": "currentlyReading",
          "author": "Harper Lee",
          "title": "To Kill a robin",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        {
          "id": "ryan3",
          "shelf": "wantToRead",
          "author": "Bruce Lee",
          "title": "To Kill a Wilt",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        }
      ]
    }

    const initialCalendarState = {

   
      books: {
 
      },

      searchResults:[

      ],
      query:""
    }

  
  function bookReducer (state = initialCalendarState, action) {

   
  
    switch (action.type) {
      case MOVE_BOOK :
      const { book, shelf} = action
    
      const nextBook = {
        ...book,
        "shelf":shelf
      }
      const key = nextBook.id;

      var nextBooks = {...state.books }
      nextBooks[key] = nextBook
      
      return {...state,
        books: nextBooks
      }

      case LOAD_BOOKSHELF:

      const { books} = action
      const netbooks = books.reduce((acc,v)=> {  

        const key = v.id
         acc[key] = v
         return acc
        
        },{})

      
      var ret = {...state}
      ret["books"] = netbooks

      console.log(netbooks)
  
      return ret
       
      case SEARCH_TITLE:
        const { searchResults, query} = action

        const nextBooks = searchResults.map((book)=>{
          if (book.id in state.books){
            return state.books[book.id]
          }
          
          return {
            ...book,
            "shelf": "none"
          }

        })

        return {
          ...state,
          "searchResults":nextBooks, 
          query
        }
        
      default :
        return state
    }
  }
  



  export default  bookReducer