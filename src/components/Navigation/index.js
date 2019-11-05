import React from 'react';
import { Link } from 'react-router-dom'

const menus = [
    {
        title: '提醒事项 / 计划',
        to: '/plan'
    }
];


class Nacigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/plan">用Component渲染組件</Link>
            </div>
        );
    }
};

export default Nacigation;