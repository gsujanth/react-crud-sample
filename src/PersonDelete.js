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
                <div className="DeletePerson">
                    <label>Are you sure? </label>
                    <button onClick={() => this.props.switch(act.ViewAll, { deleteId: this.props.info.personId })}>Yes</button>
                    <button onClick={() => this.props.switch(act.View, { personId: this.props.info.personId })}>No</button>
                </div >
            );
        }
        return (
            <section>
                <h2>Deleting Person</h2>
                {details}
                <button onClick={() => this.props.switch()}>View All People</button>
            </section>
        );
    }
}

export default PersonView;
