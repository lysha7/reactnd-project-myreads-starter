import React from 'react'
import { Link } from 'react-router-dom'
import RenderBooks from './RenderBooks'
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component {

	state = {
		bookshelfBooks: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ bookshelfBooks: books })
		})
	}

	render() {
		const books = this.state.bookshelfBooks

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  	<RenderBooks
                  		books={books.filter((book) => book.shelf === 'currentlyReading')}
                  	/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  	<RenderBooks
                  		books={books.filter((book) => book.shelf === 'wantToRead')}
                  	/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  	<RenderBooks
                  		books={books.filter((book) => book.shelf === 'read')}
                  	/>
                  </div>
                </div>
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