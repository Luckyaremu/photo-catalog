import './App.css';
import React from "react"
import CatSearch from "./components/CatSearch"
import ImageList from "./components/ImageList"

const API_KEY = "19016639-23d93c3595b2b041b47534593";


class App extends React.Component {
  state = {
    images: [] 
  }
 handleGetRequest = async (e) => {
    e.preventDefault()
  const SearchTerm = e.target.elements.searchValue.value
  
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${SearchTerm}&image_type=photo`

  const request = await fetch(url)
  const response = await request.json()
  this.setState({images: response.hits})
  console.log(this.state.images)
  console.log(SearchTerm)
 } 

  render() {
    return (
      <div>
        <CatSearch handleGetRequest={this.handleGetRequest}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;
