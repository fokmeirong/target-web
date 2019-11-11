import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoadableComponent from './utils/LoadableComponent';

//pages
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


//add loading effect when init the page
const Plan = LoadableComponent(()=>import('./pages/Plan'));
const Summary = LoadableComponent(()=>import('./pages/Summary'));
const Note = LoadableComponent(()=>import('./pages/Note'));
const Target = LoadableComponent(()=>import('./pages/Target'));

function Routes() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/plan" component={Plan} />
          <PrivateRoute exact path="/summary" component={Summary} />
          <PrivateRoute exact path="/note" component={Note} />
          <PrivateRoute exact path="/target" component={Target} />

          <Route exact path="/login" component={Login}/>
          <Route  component={NotFound}/>
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
}

export default Routes;
