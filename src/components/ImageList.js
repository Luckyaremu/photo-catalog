import React from "react"
import imageList from '../styles/ImageList.css';

const ImageList = (props) => {
    console.log(props)
    return (
        <div className="container">
            <div className="ImageList">
        {props.images.map(({id, largeImageURL, tags})=> {
            return (
                <div key={id} className="row">
                    <div className="ImageList_container">
                    <img className="ImageList_image" src={largeImageURL} alt={tags}/>
                    </div>
                    
                    <div className="ImageList_details">
                    <button>View</button>
                    </div>
                </div>
            )
        })}
        </div>
        </div>
    )
  
}
export default ImageList