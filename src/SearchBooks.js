import React from 'react'
import { Link } from 'react-router-dom'
import RenderBooks from './RenderBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

	state = {
		books: [],
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query })
	}

	search = (query) => {
		BooksAPI.search(query).then((books) => {
			if (Array.isArray(books)) {
				books = books.filter((book) => {
					const shelfBookIds = this.props.bookshelfBooks.map((shelfBook) => shelfBook.id)
					return !shelfBookIds.includes(book.id)
				})

			}
			this.setState({ books })
		})
	}

	render() {

		return (
          	<div className="search-books">
            	<div className="search-books-bar">
              		<Link to="/" className="close-search">Close</Link>
              		<div className="search-books-input-wrapper">

                		<input
                			type="text"
                			placeholder="Search by title or author"
                			value={this.state.query}
                			onChange={(event) => {
                				this.updateQuery(event.target.value)
                				this.search(this.state.query)
                			}}
                		/>

              		</div>
            	</div>
            	<div className="search-books-results">
              		<RenderBooks
              			books={this.state.books}
              			changeShelf={this.props.changeShelf}
              		/>
            	</div>
          	</div>
		)
	}
}

export default SearchBooks