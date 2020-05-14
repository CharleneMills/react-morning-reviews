import React from 'react'

function ListItem(props) {
    return (
    <div className="List-Item">
        <img className="movie-poster" src={props.movieProp.posterImg}/>
        <br/>
        <div className="movie-info">
            <p>{props.movieProp.title}</p>
            <p>{props.movieProp.year}</p>
        </div>
    </div>
    )
}


export default ListItem;