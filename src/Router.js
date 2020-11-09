import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import App from "./App"
import CatViews from "./container/CatViews"

const Router = () => {
   
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" component={App} exact />
          <Route path="/image/:id" component={CatViews}/>
      </Switch>
      </BrowserRouter>
    )
}

export default Router