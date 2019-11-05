import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route  component={NotFound}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
