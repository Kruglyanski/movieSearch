import React from 'react'
import { Link,  withRouter } from 'react-router-dom'

import {compose} from 'redux'
import { connect } from 'react-redux'

import { List } from 'semantic-ui-react'
import classNames from 'classnames'
import * as _ from 'lodash'

import {getCategoriesList} from '../../selectors/movies'
import {getActiveCategoryId} from '../../selectors/movies'

import './Categories.css'

const Categories = ({categories, activeCategoryId}) => {
  console.log('activeCategoryId', activeCategoryId)

  const renderCategory = (category, index) => {
    const getActiveState = (category) => category.id == activeCategoryId
      console.log('getActiveState', getActiveState(category))
    const linkClass = classNames({
      'active': getActiveState(category),
    })

    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        {category.name}
      </Link>
    )
  }

  const renderAllCategory = () => {
    const linkClass = classNames({
      'active': _.isNil(activeCategoryId),
    })

    return (
      <Link
        to='/'
        className={linkClass}
      >
                All Genres
      </Link>
    )
  }

  return (
    <div >
      <h4>Genre</h4>
      <List selection verticalAlign='middle'>
      <List.Item>
          {renderAllCategory()}
      </List.Item>
        {categories.map((category, index) => {
          return (
            <List.Item key={index}>
              {renderCategory(category, index)}
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategoriesList(state),
  activeCategoryId: getActiveCategoryId(ownProps),

})

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories)

