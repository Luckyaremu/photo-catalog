/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import catViews from '../styles/CatViews.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CatViews = props => {
  console.log(props.location.state.image);
  const {
    largeImageURL: image, tags, user: owner, pageURL,
  } = props.location.state.image;
  
  return (
          <div className="CatView_container">

            <img src={image} alt={tags} className="CatView_image" />
              <h4>
                Downlaod:<span><a target="_blank" href={pageURL}>Go to Download</a></span>
              </h4>
              <button className="CatView_button">
                <Link to="/">Home</Link>
              </button>
            </div>
  );
};

export default CatViews;
