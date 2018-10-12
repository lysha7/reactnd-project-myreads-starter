import React from 'react'
import { Link } from 'react-router-dom'
import RenderBooks from './RenderBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

	state = {
		results: [],
		query: ''
	}

	// Thanks to Carlos F. for help with a bug fix in this function
	updateQuery = (query) => {
		if (query) {
			this.setState({ query })
			this.search(query)
		}
		else {
			this.setState({ results: [], query: '' })
		}
		
	}

	search = (query) => {
		BooksAPI.search(query).then((results) => {
			// Only runs if search is returning an array
			if (Array.isArray(results)) {
				// This is an array of the books currently on the shelves already
				const shelfBooks = this.props.bookshelfBooks

				// Iterates through array of search results and books on bookshelves. If id's from the two arrays match, sets the shelf of the search result to match
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