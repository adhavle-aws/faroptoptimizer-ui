import React from 'react'
import { Redirect, Route } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token');
        return isAuthenticated ? (
            <Route  path={this.props.path}  exact={this.props.exact} component={this.props.component} />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;