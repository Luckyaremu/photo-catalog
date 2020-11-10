/* eslint-disable */
/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */

import React from "react"
import CatSearch from "./CatSearch"
import ImageList from "./ImageList"

const API_KEY = "19016639-23d93c3595b2b041b47534593";


class ApiCall extends React.Component {
  state = {
    images: [],
    error: null 
  }
 handleGetRequest = async (e) => {
    e.preventDefault()
  const SearchTerm = e.target.elements.searchValue.value
  
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${SearchTerm}&image_type=photo`

  const request = await fetch(url)
  const response = await request.json()
  if (!SearchTerm){
    this.setState({error: "please provide a name......."})
  } else {
    this.setState({images: response.hits, error: null })
  }

 } 

  render() {
    return (
      <div>
        <CatSearch handleGetRequest={this.handleGetRequest}/>
        {
          this.state.error !== null?
        <div>{this.state.error}</div> :
        <ImageList images={this.state.images}/>
        }
      </div>
    )
  }
}

export default ApiCall;
