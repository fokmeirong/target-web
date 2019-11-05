import React from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class LoadingPage extends React.Component {
    componentWillMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    render() {
        return (
            <div />
        )
    }
}

const loadableComponent = (component) => {
    return Loadable({
        loader: component,
        loading: () => <LoadingPage/>
    });
}

export default loadableComponent;