import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

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
              	<Bookshelf
              		title="Currently Reading"
              		books={books.filter((book) => book.shelf === 'currentlyReading')}
              		changeShelf={this.props.changeShelf}
              	/>
              	<Bookshelf
              		title="Want To Read"
              		books={books.filter((book) => book.shelf === 'wantToRead')}
              		changeShelf={this.props.changeShelf}
              	/>
              	<Bookshelf
              		title="Read"
              		books={books.filter((book) => book.shelf === 'read')}
              		changeShelf={this.props.changeShelf}
              	/>
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