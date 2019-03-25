import React, { Component } from 'react';

class PersonView extends Component {

    render() {
        let act = this.props.info.actionOptions;
        let person = this.props.info.people.filter((p) => p.id === this.props.info.personId);
        let details = (
            <div className="NoPersonFound">Could not find a person with id {this.props.info.personId}!</div>
        );
        if (person && person.length === 1) {
            person = person[0];
            details = (
                <div className="ViewPerson">
                    <label>Id: </label> <p>{person.id}</p>
                    <label>First Name: </label> <p>{person.firstName}</p>
                    <label>Last Name: </label> <p>{person.lastName}</p>
                </div >
            );
        }
        return (
            <section>
                <h2>Viewing Person</h2>
                {details}
                <button onClick={() => this.props.switch(act.Update, { personId: this.props.info.personId })}>Update</button>
                <button onClick={() => this.props.switch(act.Delete, { personId: this.props.info.personId })}>Delete</button>
                <button onClick={() => this.props.switch()}>View All People</button>
            </section>
        );
    }
}

export default PersonView;
