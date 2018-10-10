import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state= {
    currentShelf: 'none'
  }

  changeShelf = (bookId, value) => {
    this.setState({ currentShelf: value })
    console.log(bookId, value)
    BooksAPI.update({id: bookId}, value).then((response) => console.log(response))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            currentShelf={this.state.currentShelf}
            changeShelf={this.changeShelf}
          />
          )}
        />
        <Route path="/search" render={() => (
          <SearchBooks
            currentShelf={this.state.currentShelf}
            changeShelf={this.changeShelf}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
