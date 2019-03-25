import React, { Component } from 'react';

const uuid = require('uuid4');

class PersonView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newPersonInfo: { id: uuid() }
        };
    }

    handleChange = (event) => {
        let tmpState = { ...this.state };
        tmpState.newPersonInfo[event.target.getAttribute('propname')] = event.target.value;
        super.setState(tmpState);
    };


    render() {
        let act = this.props.info.actionOptions;
        return (
            <section>
                <h2>Creating new person...</h2>
                <div className="CreatePerson">
                    <label>First Name: </label> <input type="text" value={this.state.newPersonInfo.firstName} onChange={this.handleChange} propname="firstName" />
                    <label>Last Name: </label> <input type="text" value={this.state.newPersonInfo.lastName} onChange={this.handleChange} propname="lastName" />
                    <button onClick={() => this.props.switch(act.View, { newPerson: this.state.newPersonInfo })}>Create</button>
                    <button onClick={() => this.props.switch()}>Cancel</button>
                </div >
                <button onClick={() => this.props.switch()}>Back</button>
            </section>
        );
    }
}

export default PersonView;
