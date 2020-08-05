import React from 'react'
import Card from './movie/Card'

import { getMovie } from './utils/Api'
import { getLocalStorage } from './utils/LocalStorage'


class MyList extends React.Component{
    constructor(state){
        super(state)

        this.state = {
            movies : [],
            moviesID : []
        }
    }

    componentDidMount(){
        const moviesID = getLocalStorage('favorite-list');
        //console.log( 'moviesID', moviesID)
        this.setState({
            moviesID
        });

        Promise.all(getMovie(moviesID)).then((movies) => this.setState({movies}));
        //console.log( 'movies', this.state.movies)
    }

    render(){
        return (
            <>             
                {   
                    ( this.state.movies.length > 0 ? this.state.movies.map((ele, i) => <Card film={ele} key={i} /> ) : 'No film' )
                }
            </>
        );
    }
}

export default MyList;