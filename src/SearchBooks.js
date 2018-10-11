import React from 'react'
import { Link } from 'react-router-dom'
import RenderBooks from './RenderBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

	state = {
		results: [],
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query })
	}

	search = (query) => {
		BooksAPI.search(query).then((results) => {
			// Only runs if search is returning an array
			if (Array.isArray(results)) {
				const shelfBooks = this.props.bookshelfBooks

				// Iterates through array of search results and books on bookshelves. If id's from the two arrays match, set the shelf of the search result to match
				for (const result of results) {
					for (const shelfBook of shelfBooks) {
						if (result.id === shelfBook.id) {
							result.shelf = shelfBook.shelf
						}
					}
				}
			}
			this.setState({ results })
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
              			books={this.state.results}
              			changeShelf={this.props.changeShelf}
              		/>
            	</div>
          	</div>
		)
	}
}

export default SearchBooks