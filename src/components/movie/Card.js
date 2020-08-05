import React  from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

const CardMovie = ({ film, onClick, source }) =>{



    return (
        <Card className="px-2 my-2 border-0" onClick={onClick}>
            <Card.Img variant="top" src={(film.poster_path === null ? source : "https://image.tmdb.org/t/p/w300"+ film.poster_path)} />
            <Card.Body className="text-center">
                <Card.Title> {film.title} </Card.Title>
                <Card.Text> {film.overview} </Card.Text>
            </Card.Body>
        </Card>
    )
}

CardMovie.propTypes = {
    source: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};
  
CardMovie.defaultProps = {
    source: "https://upload.wikimedia.org/wikipedia/commons/3/30/DVD.png",
    title: "Film DeMo",
    description: "Bla Bla Bla",
};

export default CardMovie;