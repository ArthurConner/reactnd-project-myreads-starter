export const MOVE_BOOK = 'MOVE_BOOK'
export const SEARCH_TITLE = 'SEARCH_TITLE'

export function moveBook ({ book, shelf }) {
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