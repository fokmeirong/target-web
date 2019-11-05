
import React from 'react';
import { withRouter, Switch, Redirect, Link } from 'react-router-dom'
import LoadableComponent from './../../utils/LoadableComponent'
import Privateroute from '../../components/PrivateRoute';

const Plan = LoadableComponent(()=>import('./../../pages/Plan'));
// const NotFound = LoadableComponent(()=>import('./../../pages/NotFound'));

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Link to="/plan">提醒事项 / 计划</Link>
                <br></br>
                <Link to="/summary">总结</Link>
                <br></br>
                <Link to="/note">随手记</Link>
                <br></br>
                <Link to="/target">确立人生目标</Link>
            </div>
        );
    }
}

export default Home;