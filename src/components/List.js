import React, { Component } from 'react'
import ListItem from './ListItem.js'
import movieData from '../data/movies.json'


class List extends Component {

    constructor(){
        super()

        this.state = {
            movies: movieData,
        }
    }

   render() {
        
        const moviesMap = this.state.movies.map( movie => {
            return <ListItem key={movie.id} movieProp={movie}/>
        })

        return(
            <div>
                {moviesMap}
            </div>
        )
    
   } 
   
}

export default List;
