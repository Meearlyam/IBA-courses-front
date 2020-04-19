import React from 'react';

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
                <form>
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
                    <br/><br/>
                    <input className="button" type="submit" value="Log in"
                           onClick={(e) => this.handleClick(e)}/>
                </form>
            </div>
        );
    }
}

export default LogInComponent;