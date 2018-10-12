import React from 'react'

class BookshelfChanger extends React.Component {

	// Thanks to Slack user Carlos F. for help with storing/updating the state of the selection menu
	state = {
		shelf: this.props.book.shelf || 'none'
	}

	changeShelf = (book, shelf) => {
		if (this.state.shelf !== shelf) {
			this.setState( {shelf} )
			this.props.changeShelf(book, shelf)
		}
	}

	render() {

		return(
	        <div className="book-shelf-changer">
	          <select value={this.state.shelf} onChange={(event) => this.changeShelf(this.props.book, event.target.value)}>
	            <option value="move" disabled>Move to...</option>
	            <option value="currentlyReading">Currently Reading</option>
	            <option value="wantToRead">Want to Read</option>
	            <option value="read">Read</option>
	            <option value="none">None</option>
	          </select>
	        </div>
		)
	}
}

export default BookshelfChanger