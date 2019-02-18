import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'
import {Input} from 'semantic-ui-react'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          <h1>MOVIE SEARCH</h1>
        </header>
        <section className="search-block">
          <Input
            size="mini"
            icon="search"
            onChange={this.props.onInputChangeProp} />
        </section>
        <section className="layout-content">{this.props.children}</section>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onInputChangeProp: PropTypes.func,
}
