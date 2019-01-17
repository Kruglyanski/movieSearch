// Libs
import { createSelector } from 'reselect'
import * as _ from "lodash";


export const getData = ({ movies = {} }) => movies || {}

export const getMovieList = createSelector(getData, data => data.items)

export const getMovieById = id =>
  createSelector(getMovieList, movies => movies.find(i => {
    return i.id === id
  }
  ))

export const getCategoriesList = state => state.categories.items// ??????????????

export const getActiveCategoryId = ownProps => ownProps.match.params.id// ????????????????????
