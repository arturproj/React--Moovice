const API_HOST = 'http://api.themoviedb.org';
const API_KEY = 'api_key=125ffd68dbb470348f7682791a73a74d';

const fetchMovies = (url) => {
    return fetch( url )
        .then(res => res.json())
            .then(data => data)
}

const getDiscoverMovies = () =>{
    //console.log('getDiscoverMovies All import OK')
    var TODAY = new Date();   

    var ddf = ( TODAY.getDate() < 10 ? "0"+TODAY.getDate() : TODAY.getDate() );
    var mmf = ( TODAY.getMonth()+1 < 10 ? "0"+(TODAY.getMonth()+1) : TODAY.getMonth()+1 );

    var lastday = TODAY.getDate() - (TODAY.getDay() - 1) + 6;

    var NEXT_WEEK = new Date(TODAY.setDate(lastday));       

    TODAY = `${TODAY.getFullYear()}-${mmf}-${ddf}`;

    var ddn = ( NEXT_WEEK.getDate() < 10 ? "0"+NEXT_WEEK.getDate() : NEXT_WEEK.getDate() );
    var mmn = ( NEXT_WEEK.getMonth()+1 < 10 ? "0"+(NEXT_WEEK.getMonth()+1) : NEXT_WEEK.getMonth()+1 );

    NEXT_WEEK = `${NEXT_WEEK.getFullYear()}-${mmn}-${ddn}`;

    return fetchMovies(`${API_HOST}/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&${API_KEY}`);
    
}

const getPopularMovies = () =>{
    //console.log('getPopularMovies All import OK')
    return fetchMovies(`${API_HOST}/3/discover/movie?sort_by=popularity.desc&${API_KEY}`);
}

const getMovie = (ids) =>{  
    //console.log('getMovie by ID import OK',ids)
    return ids.map( id => fetchMovies(`${API_HOST}/3/movie/${id}?${API_KEY}`) );
}

export { getDiscoverMovies, getPopularMovies, getMovie };