import React from 'react'
import Card from './movie/Card'

const Discover = ({movies}) =>{
    return (
        <>             
            {   
                ( movies.length > 0 ? movies.map((ele, i) => <Card film={ele} key={i} /> ) : 'No film' )
            }
        </>
    )
}

export default Discover;