import React from 'react';

// export default Header;
// class Header extends React.Component {

//     render() {
//         return (
//             <div className="header">
//                 <div className="left">
//                     {this.props.left}
//                 </div>
//                 <div className="title">
//                     {this.props.title}
//                 </div>
//                 <div className="right">
//                     {this.props.right}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Header;

const Header = (props) => {
    return (
        <div className="header">
            <div className="left">
                {props.left}
            </div>
            <div className="title">
                {props.title}
            </div>
            <div className="right">
                {props.right}
            </div>
        </div>
    );
}

export default Header;