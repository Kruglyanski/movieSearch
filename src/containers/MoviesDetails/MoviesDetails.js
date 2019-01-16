import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// selectors
import { getMovieList, getMovieById } from '../../selectors/movies'

// semantic-ui
import { Card, Image, Divider } from 'semantic-ui-react'

// image api
import { imageUrl } from '../../api/api'

// Actions
import { getMovies } from '../../actions/movies'
import { getGenres } from '../../actions/genres'
//libs
import * as  _  from 'lodash'

// styles
import './MoviesDetails.css'


class Movie extends Component {
  componentDidMount() {
    this.props.getGenres()
    this.props.getMovies()
    this.props.getCategories()
    this.props.getCategoriesw()
  }

  render() {
    const { movie, genresOfMovies } = this.props
    const foundGenres = _.map(movie.genreIds, (item) => _.find(genresOfMovies.genres, {id: item}))
    {console.log('1',foundGenres)}
    const movieGenresArr = _.reduce(foundGenres, (memo, item) => {
      memo.push(item.name)
      return memo
    }, [])
    {console.log('1',movieGenresArr)}
    return (

      <div className="details-block">
        <header className="details-header">
          <h1>{movie.title}</h1>
        </header>
        <div className="movie">
          <Card style={{ minHeight: 300, width: 550 }}>
            <Image src={imageUrl(movie.backdropPath)} color="teal" />
            <Card.Content>
              <Card.Meta as="h2">
                <span className="date">Released at {movie.releaseDate}</span>
              </Card.Meta>
              <Divider />
              <Card.Description
                style={{
                  textAlign: 'justify',
                  fontSize: 20,
                }}>
                {movie.overview}
              </Card.Description>
              <Divider />
              <h3>genres: {movieGenresArr.join(', ')}</h3>
              <h3>popularity: {movie.popularity}</h3>
              <h3>language: {movie.originalLanguage}</h3>
            </Card.Content>
          </Card>
        </div>
        <div className="btn-block">
          <Link to="/">
            <button className="load-btn" onClick={this.onLoadMoreMovies}>
              BACK
            </button>
          </Link>
        </div>
        <footer className="details-footer"></footer>
      </div>
    )
  }
}



const mapStateToProps = (state, props) => {
  const movieId = +props.match.params.id
  return {
    movies: getMovieList(state),
    movie: getMovieById(movieId)(state) || {},
    genresOfMovies: state.genres.items,
    //movieGenresArr: state.genres.movieGenresArr,
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      getGenres,
    },
    dispatch
  )

Movie.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  movie: PropTypes.instanceOf(Object),
  genresOfMovies: PropTypes.instanceOf(Object),

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)
