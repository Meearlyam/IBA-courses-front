import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'USER', label: 'USER' },
    { value: 'ADMIN', label: 'ADMIN' }
];

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            role: 'USER',
            confirmed: false
        }
    }
    render() {
        return(
            <div className="register-form">
                <h1>Create an account</h1>
                <table className="register-table">
                    <tr>
                        <td><label className="register-label">Username</label></td>
                        <td>
                            <input className="textfield" type="text" onChange={(e, newUsername) =>
                                this.setState({username:newUsername})}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td><label className="register-label">Email</label></td>
                        <td>
                            <input className="textfield" type="text" onChange={(e, newEmail) =>
                                this.setState({email:newEmail})}>
                            </input>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label className="register-label">Password</label></td>
                        <td>
                            <input className="textfield" type="text" onChange={(e, newPassword) =>
                                this.setState({password:newPassword})}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td><label className="register-label">Confirm password</label></td>
                        <td>
                            <input className="textfield" type="text" onChange={(e, confirmedPassword) =>
                                this.setState({confirmed:(this.state.password === confirmedPassword)})}>
                            </input>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label className="register-label">Role</label></td>
                        <td>
                            <Select
                                options={options}
                                defaultValue={options[0]}
                                onChange={(e, newRole) =>
                                    this.setState({role:newRole})}
                            />
                        </td>
                    </tr>
                </table>
                <br/><br/>
                <input className="button" type="submit" value="Register"
                       onClick={(e) => this.handleClick(e)}>
                </input>
            </div>
        );
    }
}

export default RegisterComponent;