import React from 'react';
import './../../style/header.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from './../../components/Navigation'


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            showNav: false
        };
    }

    toggleNav() {
        
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="left">
                        {
                            this.props.left || <i className="fas fa-bars toggle-nav-btn" onClick={this.toggleNav}></i>
                        }
                    </div>
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="right">
                        {this.props.right}
                    </div>
                </header>

                <aside className="nav-slide-list">
                    <Navigation/>
                </aside>

            </div>
        );
    }
}

export default Header;