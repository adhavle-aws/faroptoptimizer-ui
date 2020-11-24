import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
const { AppLayout, Button, ColumnLayout, FormField, Icon, Select } = window['AWS-UI-Components-React'];



export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        localStorage.removeItem("token");
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        
        e.preventDefault();
        
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            localStorage.setItem('token',true)
        }
    }
    
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect from="/login" to="/#"  />; 
          }
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="awsui-grid awsui-util-p-s">
            <div className="custom-home__header custom-awsui-util-pt-xxxl awsui-row">
              <div className="col-xxs-12">
                <div className="awsui-row">
                  <div className="custom-home__category col-xxs-10 offset-xxs-1 col-l-8 offset-l-2">
                    Numerical Optimization on AWS
                  </div>
                </div>
                <div className="awsui-row">
                  <div className="custom-home__header-title col-xxs-10 offset-xxs-1 col-s-6 col-l-5 offset-l-2 col-xl-6">
                    <div className="awsui-text-large">
                      <div>
                        <strong>Amazon FarOpt</strong>
                      </div>
                      <div>fast and reliable numerical optimization on AWS</div>
                    </div>
                    <p>
                      Build optimization applications with agility & self service capabilities in a cost efficient manner. Leverage pre-built example implementations and benefit from cloud economies of scale.
                    </p>
                  </div>
        
                  <div className="col-xxs-10 offset-xxs-1 col-s-4 offset-s-0 col-l-3 col-xl-2">
                    <div className="awsui-util-container awsui-util-mb-n">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <h1>Login</h1>
                            <FormField stretch={true} className="awsui-util-d-b">
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <Button variant="primary" text="Login" />
                                    {loggingIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>    
                            </FormField>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        {/*
            <div className="awsui-util-pt-xxl awsui-row">
              <div className="col-10">
                <div className="awsui-util-container">
                  <div>
                  <img src="./images/FarOpt.jpeg" width="100%" alt="screenshot"/>
                  </div>
                </div>
              </div>
            </div>
        */}
        </div>
        );
    }
}



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
