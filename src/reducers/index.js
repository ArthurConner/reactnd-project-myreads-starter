

import {
  MOVE_BOOK,
  SEARCH_TITLE,
  } from '../actions'
  
  const initialCalendarState = {

   
      books: [
        {
          "id": "ryan",
          "shelf": "currentlyReading",
          "author": "Harper Lee",
          "title": "To Kill a Mockingbird",
          "backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
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


  
  function bookReducer (state = initialCalendarState, action) {

    const { book, shelf} = action
  
    switch (action.type) {
      case MOVE_BOOK :

      var nextBooks = state.books.filter((c) => c.id !== book.id)
  
      nextBooks.push({
        ...book,
        "shelf":shelf
      })

      return nextBooks
        
        /*
      case REMOVE_FROM_CALENDAR :
        return {
          ...state,
          [day]: {
            ...state[day],
            [meal]: null,
          }
        }
        */
      default :
        return state
    }
  }
  



  export default  bookReducer