
import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <ul className="nav-list">
                <li><Link to="/plan">提醒事项 / 计划</Link></li>
                <li><Link to="/summary">总结</Link></li>
                <li><Link to="/note">随手记</Link></li>
                <li><Link to="/target">确立人生目标</Link></li>
            </ul>
        );
    }
}

export default Navigation;