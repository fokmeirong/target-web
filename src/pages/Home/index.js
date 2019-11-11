
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
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