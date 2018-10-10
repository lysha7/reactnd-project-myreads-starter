import React from 'react'
import RenderBooks from './RenderBooks'

class Bookshelf extends React.Component {

	render() {

		return (
	        <div className="bookshelf">
	          <h2 className="bookshelf-title">{this.props.title}</h2>
	          <div className="bookshelf-books">
	          	<RenderBooks
	          		books={this.props.books}
	          	/>
	          </div>
	        </div>
		)
	}
}

export default Bookshelf