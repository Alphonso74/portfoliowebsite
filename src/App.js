import './App.css';
import React, {Component} from 'react';
import Navbar from "./Components/UI/Navbar/Navbar";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import MainPage from "./Containers/MainPage";
import LandingPage from "./Containers/LandingPage";
import Resume from "./Containers/Resume";
import Blog from "./Containers/Blog";
import ContactMe from "./Containers/ContactMe";

class App extends Component {

    state = {

        currentComponent: null
    };

  render(){

      let routes = (

          <Switch>

              {/*<Route path="/auth"  component={}/>*/}
              <Route path="/" exact component={LandingPage}/>
              <Route path="/mainpage" exact component={MainPage}/>
              <Route path="/resume" exact component={Resume}/>
              <Route path="/blog" exact component={Blog}/>
              <Route path="/contact" exact component={ContactMe}/>


              {/*<Redirect to="/"/>*/}

          </Switch>

      );

    return (
        <div>



              {routes}



        </div>
    );
  }
}

export default App;
