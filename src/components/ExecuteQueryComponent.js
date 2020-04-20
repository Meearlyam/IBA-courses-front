import React from 'react';

class ExecuteQueryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
    }
    render() {
        return(
            <div className="query-form">
                <div>
                    <div className="sql-frame">
                        <textarea className="query-textfield" placeholder="Enter SQL query"/>
                    </div>
                    <div className="button-frame">
                        <input className="query-button" type="submit" value="Execute query"
                               onClick={(e) => this.handleClick(e)}>
                        </input>
                    </div>
                    <div className="result-frame">
                        <input type="text" aria-multiline/>
                    </div>
                </div>
                <div>
                    <form action="/login" className="button-panel">
                        <input className="panel-button" type="submit" value="Log out"
                               onClick={(e) => this.handleClick(e)}>
                        </input>
                    </form>
                    <form action="/logfile" className="button-panel">
                        <input className="panel-button" type="submit" value="Open logfile"
                               onClick={(e) => this.handleClick(e)}>
                        </input>
                    </form>
                    <div className="button-panel">
                        <input className="panel-button" type="submit" value="Run SQL for Dentistry"
                               onClick={(e) => this.handleClick(e)}>
                        </input>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExecuteQueryComponent;