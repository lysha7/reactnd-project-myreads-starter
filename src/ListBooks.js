import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component {

	render() {
		const books = this.props.bookshelfBooks

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	<Bookshelf title="Currently Reading" value="currentlyReading" books={books.filter((book) => book.shelf === 'currentlyReading')}/>
              	<Bookshelf title="Want To Read" value="wantToRead" books={books.filter((book) => book.shelf === 'wantToRead')}/>
              	<Bookshelf title="Read" value="read" books={books.filter((book) => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		)
	}
}

export default ListBooks