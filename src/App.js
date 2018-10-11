import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state= {
    bookshelfBooks: []
  }

  changeShelf = (bookId, value) => {
    BooksAPI.update({id: bookId}, value).then(() => {BooksAPI.getAll().then((books) => this.setState({ bookshelfBooks: books }))})
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ bookshelfBooks: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            bookshelfBooks={this.state.bookshelfBooks}
            changeShelf={this.changeShelf}
          />
          )}
        />
        <Route path="/search" render={() => (
          <SearchBooks
            bookshelfBooks={this.state.bookshelfBooks}
            changeShelf={this.changeShelf}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
