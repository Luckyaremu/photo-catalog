import React from 'react';
import { Link } from 'react-router-dom';
import imageList from '../styles/ImageList.css';

const ImageList = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        {props.images.map(image => (
          <div key={image.id} className="col-md-4">
            <div className="ImageList_container">
              <img className="ImageList_image" src={image.largeImageURL} alt={image.tags} />
            </div>

            <div className="ImageList_details">
              <Link to={{
                pathname: `/image/${image.id}`,
                state: { image },
              }}
              >
                <button>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageList;
