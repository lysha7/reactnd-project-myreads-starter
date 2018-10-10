import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state= {
    currentShelf: 'none',
    bookshelfBooks: []
  }

  changeShelf = (bookId, value) => {
    BooksAPI.update({id: bookId}, value).then((response) => this.setState({ currentShelf: value, bookshelfBooks: response }))
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ bookshelfBooks: books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            currentShelf={this.state.currentShelf}
            changeShelf={this.changeShelf}
            bookshelfBooks={this.state.bookshelfBooks}
          />
          )}
        />
        <Route path="/search" render={() => (
          <SearchBooks
            currentShelf={this.state.currentShelf}
            changeShelf={this.changeShelf}
            bookshelfBooks={this.state.bookshelfBooks}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
