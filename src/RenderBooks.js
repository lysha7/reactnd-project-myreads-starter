import React from 'react'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from './BooksAPI'

class RenderBooks extends React.Component {

	state= {
		currentShelf: 'none'
	}

	changeShelf = (bookId, value) => {
		this.setState({ currentShelf: value })
		console.log(bookId, value)
		BooksAPI.update({id: bookId}, value).then((response) => console.log(response))
	}

	render() {
		const { books } = this.props

		if (Array.isArray(books) && books.length !== 0) {
			return(
		        <ol className="books-grid">
		        	{books.map((book) => (
						<li key={book.id}>
						<div className="book">
						  <div className="book-top">
						    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
						    <BookshelfChanger
						    	changeShelf={this.changeShelf.bind(this)}
						    	currentShelf={this.state.currentShelf}
						    	bookId={book.id}
						    />
						  </div>
						  <div className="book-title">{book.title !== undefined && book.title}</div>
						  <div className="book-authors">{book.authors !== undefined && book.authors.join(', ')}</div>
						</div>
						</li>
		        	))}
		        </ol>
			)
		}
		return(
			<p>There are no books to display</p>
		)
	}
}

export default RenderBooks