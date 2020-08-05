import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from './components/NavBar'

import Discover from './components/Discover'
import DiscoverBattle from './components/DiscoverBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import MyList from './components/MyList'
import { getPopularMovies, getDiscoverMovies } from './components/utils/Api';

class App extends React.Component{
  constructor(state){
      super(state)
      this.state ={
          popular : [],
          discover : [],
          currentPage : 0,
      }
      this.halderPage = this.halderPage.bind(this)
  }

  componentDidMount(){
    
    getPopularMovies()
      .then(movies => this.setState({
        popular : movies.results
      })
    );
    
    getDiscoverMovies()
      .then(movies => this.setState({
        discover : movies.results
      })
    );
  }

  halderPage(){
    this.setState({
      currentPage : this.state.currentPage+2
    })
    //console.log('halderPage',this.state.currentPage)
  }

  render(){
    return(
      <>
        <Router>
          <Navbar active={window.location.pathname}/>
          <div className="row row-cols-lg-6 row-cols-md-3 row-cols-2 mt-4 mx-0 justify-content-center">
          <Switch>
            <Route path="/my-list/">
              <MyList />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle movies={this.state.popular} courrent={this.state.currentPage} onClick={this.halderPage}/>
            </Route>
            <Route path="/popular/">
              <Popular movies={this.state.popular} />
            </Route>
            <Route path="/battle/">
              <DiscoverBattle movies={this.state.discover} courrent={this.state.currentPage} onClick={this.halderPage}/>
            </Route>
            <Route path="/">
              <Discover movies={this.state.discover} />
            </Route>
          </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
