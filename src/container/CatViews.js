import React from "react"
import {Link} from "react-router-dom"

const CatViews = (props) => {
    console.log(props.location.state.image)
    const {largeImageURL:image, tags, user:owner, pageURL} = props.location.state.image
   return ( 
    <div>
        <img src={image} alt={tags}/>
        <p>&copy:pixabay</p>
   <h4>credit: <span>{owner}</span></h4>
   <h4>Downlaod: <span><a target="_blank" href={pageURL}>Go to Download</a></span></h4>
    <button> <link to="/">Home</link></button>
    </div>
    )
}

export default CatViews