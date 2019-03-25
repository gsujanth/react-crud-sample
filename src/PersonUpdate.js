import React, { Component } from 'react';

class PersonView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // updatedPersonInfo: {
            //    id: props.info.personId
            // }
            updatedPersonInfo: props.info.people.filter((p) => p.id === props.info.personId)[0]
        };
    }

    handleChange = (event) => {
        let tmpState = { ...this.state };
        tmpState.updatedPersonInfo[event.target.getAttribute('propname')] = event.target.value;
        super.setState(tmpState);
    };

    render() {
        let act = this.props.info.actionOptions;
        //let person = this.props.info.people.filter((p) => p.id === this.props.info.personId);
        //let details = (
        //    <div className="NoPersonFound">Could not find a person with id {this.props.info.personId}!</div>
        //);
        //if (person && person.length === 1) {
        //person = person[0];
        //details = (
        let details = (
            <div className="UpdatePerson">
                <label>First Name: </label> <input type="text" value={this.state.updatedPersonInfo.firstName} onChange={this.handleChange} propname="firstName" />
                <label>Last Name: </label> <input type="text" value={this.state.updatedPersonInfo.lastName} onChange={this.handleChange} propname="lastName" />
                <button onClick={() => this.props.switch(act.View, { personId: this.props.info.personId, updatedPerson: this.state.updatedPersonInfo })}>Update</button>
                <button onClick={() => this.props.switch(act.View, { personId: this.props.info.personId })}>Cancel</button>
            </div >
        );
        //}
        return (
            <section>
                <h2>Updating person</h2>
                {details}

                <button onClick={() => this.props.switch()}>View All People</button>
            </section>
        );
    }
}

export default PersonView;
