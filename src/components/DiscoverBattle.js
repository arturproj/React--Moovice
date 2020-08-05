import React from 'react'
import Card from './movie/Card'
import { setLocalStorage } from './utils/LocalStorage'

const DiscoverBattle = ({movies, courrent, onClick}) =>{

    const select = movies.splice(courrent,2) 

    const SetFavorite = (film) => {        
        setLocalStorage('favorite-list', film.id)  
        onClick()     
    }

    return (
        <>             
            {   
                select.map((ele, i) => <Card film={ele} key={i} onClick={() => SetFavorite(ele)} /> ) 
            }
        </>
    )
}

export default DiscoverBattle;