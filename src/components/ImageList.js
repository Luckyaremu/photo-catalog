import React from "react";
import imageList from '../styles/ImageList.css';
import { Link } from "react-router-dom"

const ImageList = (props) => {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
        {props.images.map((image)=> {
            return (
                <div key={image.id} className="col-md-4">
                    <div className="ImageList_container">
                    <img className="ImageList_image" src={image.largeImageURL} alt={image.tags}/>
                    </div>
                    
                    <div className="ImageList_details">
                    <Link to={{
                        pathname: `/image/${image.id}`,
                        state: {image: image}
                    }}>
                    <button>View</button>
                    </Link>
                    </div>
                </div>
            )
        })}
        </div>
        </div>
    )
  
}
export default ImageList