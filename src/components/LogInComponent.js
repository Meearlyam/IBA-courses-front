import React from 'react';
import {Link} from "react-router-dom";

class LogInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <div>
                <h1>Log in</h1>
                <form className="login-form">
                    <label>Username:</label>
                    <br/>
                    <input className="textfield" type="text" onChange={(e, newUsername) =>
                        this.setState({username:newUsername})}>
                    </input>
                    <br/>
                    <label>Password: </label>
                    <br/>
                    <input className="textfield" type="password" onChange={(e, newPassword) =>
                        this.setState({password:newPassword})}>
                    </input>
                    <br/><br/><br/>
                    <input className="button" type="submit" value="Log in"
                           onClick={(e) => this.handleClick(e)}>
                    </input>
                    <br/><br/>
                    <Link to="/register" className="link">Create an account</Link>
                </form>
            </div>
        );
    }
}

export default LogInComponent;