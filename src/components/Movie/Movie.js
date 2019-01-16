<<<<<<< HEAD
// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// semantic-ui
import { Card, Image } from 'semantic-ui-react'

// api
import { imageUrl } from '../../api/api'

const movie = ({ movies, searchResult }) => (

  <Card.Group itemsPerRow={5}>
    {movies
      .filter(i => {
        const searchStr = `${i.title}`
        return searchStr.toLowerCase().includes(searchResult.toLowerCase())

      })
      .map(item => {
        return (
          <Card centered={true} key={item.id} style={{ minWidth: 250 }}>
            <Link to={`/movie/${item.id}`}>
              <Image
                fluid
                src={imageUrl(item.posterPath)}
                color="teal"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <Card.Meta>
                <span className="date">{item.releaseDate}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        )
      })}
  </Card.Group>
)

movie.propTypes = {
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
}

export default movie

=======
// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// semantic-ui
import { Card, Image } from 'semantic-ui-react'

// api
import { imageUrl } from '../../api/api'

const movie = ({ movies, searchResult }) => (

  <Card.Group itemsPerRow={5}>
    {movies
      .filter(i => {
        const searchStr = `${i.title}`
        return searchStr.toLowerCase().includes(searchResult.toLowerCase())

      })
      .map(item => {
        return (
          <Card centered={true} key={item.id} style={{ minWidth: 250 }}>
            <Link to={`/movie/${item.id}`}>
              <Image
                fluid
                src={imageUrl(item.posterPath)}
                color="teal"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <Card.Meta>
                <span className="date">{item.releaseDate}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        )
      })}
  </Card.Group>
)

movie.propTypes = {
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
}

export default movie

>>>>>>> origin/master
