// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Selectors
import { getMovieList } from '../../selectors/movies'

//libs
import InfiniteScroll from 'react-infinite-scroller'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// components
import Movie from '../../components/Movie/Movie'
import SidebarDiv from '../../components/Sidebar/Sidebar'

// Actions
import { getMovies, filterMovies } from '../../actions/movies'
import { getGenres } from '../../actions/genres'
// styles
import './MoviesList.css'

class MoviesList extends Component {
  componentDidMount() {
    this.props.getGenres()
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
    const { movies, searchResult } = this.props
    return (
      <Layout>

        <div className="main-wrapper" >
          <SidebarDiv onInputChangeProp={this.onInputChange} />
          <section className="movie-block" >
            <InfiniteScroll
              pageStart={0}
              loadMore={this.onLoadMoreMovies}
              hasMore={!searchResult}
              loader={<div className="loader" key={0}>Loading ...</div>}
            >
              <Movie searchResult={searchResult} movies={movies} />
            </InfiniteScroll>
          </section>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: getMovieList(state),
    searchResult: state.movies.result,
    page: state.movies.page,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      filterMovies,
      getGenres,

    },
    dispatch
  )

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
  page: PropTypes.number || null,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)
