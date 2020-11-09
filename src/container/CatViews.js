import React from 'react';
import { Link } from 'react-router-dom';
import catViews from '../styles/CatViews.css';

const CatViews = props => {
  console.log(props.location.state.image);
  const {
    largeImageURL: image, tags, user: owner, pageURL,
  } = props.location.state.image;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="CatView_container">

            <img src={image} alt={tags} className="CatView_image" img-responsive />

            <div className="CatView_copyright">
              <p>&copy:pixabay</p>
            </div>
            <div className="CatView_text">
              <h4>
                credit:
                <span>{owner}</span>
              </h4>
              <h4>
                Downlaod:
                <span><a target="_blank" href={pageURL}>Go to Download</a></span>
              </h4>
              <button className="active_recipe_button">
                {' '}
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatViews;
