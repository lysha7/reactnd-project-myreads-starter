import React from 'react'
import { Link } from 'react-router-dom'
import RenderBooks from './RenderBooks'

class ListBooks extends React.Component {

	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	}

	render() {
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
                  	<RenderBooks books={this.state.currentlyReading}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  	<RenderBooks books={this.state.wantToRead}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  	<RenderBooks books={this.state.read}/>
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