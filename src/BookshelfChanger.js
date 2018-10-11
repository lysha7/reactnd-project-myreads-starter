import React from 'react'

class BookshelfChanger extends React.Component {

	render() {

		return(
	        <div className="book-shelf-changer">
	          <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={(event) => this.props.changeShelf(this.props.book.id, event.target.value)}>
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