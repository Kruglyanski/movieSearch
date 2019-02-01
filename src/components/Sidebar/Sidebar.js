import React from 'react'
import { Input, Sidebar } from 'semantic-ui-react'
import './Sidebar.css'
import Categories from '../Categories/Categories'
import PropTypes from 'prop-types'

class SidebarDiv extends React.Component  {
  render() {
    return (
      <Sidebar visible className="sidebar" >

        <Categories />
      </Sidebar>
    )
  }
}
Sidebar.propTypes = {
  onInputChangeProp: PropTypes.string,
}
export default SidebarDiv
