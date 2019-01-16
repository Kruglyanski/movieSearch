import React from 'react'
import { Input } from 'semantic-ui-react'
import './Sidebar.css'

class SidebarDiv extends React.Component  {
  render() {
    return (
      <div className="ui visible sidebar">
          <section className="search-block">
            <Input
            size="mini"
            icon="search"
            onChange={this.props.onInputChangeProp} />
          </section>
      </div>
    )
  }
}

export default SidebarDiv
