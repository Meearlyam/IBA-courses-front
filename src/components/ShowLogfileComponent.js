import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class ShowLogfileComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    render() {
        return(
            <div className="logfile-form">
                <div className="logfile-header">
                    <div className="date-picker"><label>Your Log files:</label>
                        <DatePicker
                            className="date-picker"
                            selected={ this.state.startDate }
                            onChange={ this.handleChange }
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                    <div className="back"><Link to="/query" className="back-link" >Back</Link></div>
                </div>
                <div>
                    <textarea className="logfile-textarea"/>
                </div>
            </div>
        );
    }
}

export default ShowLogfileComponent;