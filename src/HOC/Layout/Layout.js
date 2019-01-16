<<<<<<< HEAD
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          <h1>MOVIE SEARCH</h1>
        </header>

        <section className="layout-content">{this.props.children}</section>
        <footer className="layout-footer"></footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
=======
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          <h1>MOVIE SEARCH</h1>
        </header>

        <section className="layout-content">{this.props.children}</section>
        <footer className="layout-footer"></footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
>>>>>>> origin/master
