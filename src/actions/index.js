export const MOVE_BOOK = 'MOVE_BOOK'
export const SEARCH_TITLE = 'SEARCH_TITLE'

export function moveBook (x) {
 const {book, shelf } = x
 
 // console.log("making action for " + JSON.stringify(x , null, "    "))
 // console.log("shelf is " + shelf)
 // console.log("book is " + book)
  return {
    type: MOVE_BOOK,
    book,
    shelf,
  }
}

export function searchTitle ({ query }) {
  return {
    type: SEARCH_TITLE,
    query,
  }
}