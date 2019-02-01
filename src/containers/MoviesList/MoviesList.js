// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Selectors
import { getMovieList } from '../../selectors/movies'
import { getActiveCategoryId } from '../../selectors/movies'
//libs
import InfiniteScroll from 'react-infinite-scroller'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// components
import Movie from '../../components/Movie/Movie'
import Sidebar from '../../components/Sidebar/Sidebar'

// Actions
import { getMovies, filterMovies } from '../../actions/movies'
import { getGenres } from '../../actions/genres'
import { getCategories } from '../../actions/categories'

// styles
import './MoviesList.css'

class MoviesList extends Component {
  componentDidMount() {
    this.props.getGenres()
    this.props.getMovies()
  }

  onInputChange = evt => {
    this.props.filterMovies(evt.target.value)
  }

  onLoadMoreMovies = () => {
    this.props.getMovies(true)
  }

  //onScrollList = (event) => {
  //const scrollBottom = event.target.scrollTop + event.target.offsetHeight == event.target.scrollHeight;
  //  console.log('fucckkkkkkk', scrollBottom, event.target.offsetHeight, event.target.scrollTop, event.target.scrollHeight);
  //if (scrollBottom) {
  // console.log('true2');
  //  this.onLoadMoreMovies(); //API method
  //}
  //  }

  render() {
    const { movies, searchResult, activeCategoryId } = this.props

    return (
      <div>

        <Layout onInputChangeProp={this.onInputChange}>

          <div className="main-wrapper" >
            <div className="sidebar-placeholder">
            </div>
            <Sidebar  />
            <section className="movie-block" >
              <InfiniteScroll
                className="infinite-scroll"
                pageStart={0}
                loadMore={this.onLoadMoreMovies}
                hasMore={!searchResult}
                loader={<div className="loader" key={0}>Loading ...</div>}
              >
                <Movie
                  className="cards-wrapper"
                  searchResult={searchResult}
                  movies={movies}
                  activeCategoryId={activeCategoryId}
                />
              </InfiniteScroll>
            </section>
          </div>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: getMovieList(state, ownProps),
    searchResult: state.movies.result,
    page: state.movies.page,
    activeCategoryId: getActiveCategoryId(ownProps),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      filterMovies,
      getGenres,
      getCategories,
      getActiveCategoryId,
    },
    dispatch
  )

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getActiveCategoryId: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
  page: PropTypes.number || null,
  activeCategoryId: PropTypes.number, //??????????
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)
