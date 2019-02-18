import React from 'react'
import { Sidebar } from 'semantic-ui-react'
import './Sidebar.css'
import Categories from '../Categories/Categories'


class SidebarDiv extends React.Component  {
  render() {
    return (
      <Sidebar visible className="sidebar" >

        <Categories />
      </Sidebar>
    )
  }
}

export default SidebarDiv
