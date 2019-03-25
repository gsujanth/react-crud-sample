import React, { Component } from 'react';

//const onPersonListPersonClick = (personId) => { console.log(element.currentTarget.dataset.key); console.log(`clicked for id: ${element.target.key}`); };
//const onPersonListPersonClick = (personId) => { console.log(`clicked for id: ${personId}`); };

class PersonList extends Component {

    render() {
        let inf = this.props.info;
        let act = this.props.info.actionOptions;
        return (
            <section>
                <h2>All People (Click to manage)</h2>
                <ul className="PersonList">
                    {inf.people.map((person) => <div><li onClick={() => { this.props.switch(act.View, { personId: person.id }); }} key={person.id}>{person.firstName} {person.lastName}</li> </div>)}
                </ul>
                <button className="createPerson" onClick={() => this.props.switch(act.Create)}>Create New Person</button>
            </section>
        );
    }
}

export default PersonList;
