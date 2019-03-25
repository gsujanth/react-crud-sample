import React, { Component } from 'react';
import PersonList from './PersonList';
import PersonView from './PersonView';
import PersonCreate from './PersonCreate';
import PersonUpdate from './PersonUpdate';
import PersonDelete from './PersonDelete';
import './styles/App.css';

const uuid = require('uuid4');
// id = uuid();
// This will create a unique id for new persons

const act = {
    ViewAll: 'READ_ALL',
    View: 'READ_BY_ID',
    Create: 'CREATE',
    Update: 'UPDATE_BY_ID',
    Delete: 'DELETE_BY_ID'
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [
                { firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779' },
                { firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2' }
            ],
            personId: null,
            action: act.ViewAll,
            actionOptions: act
        };
    }

    changeView = (action = act.ViewAll, changeParams = {}) => {
        let toChange = { personId: null, newPerson: null, updatedPerson: null, deleteId: null };
        toChange = { ...changeParams };
        console.log(toChange);
        let tmpState = { ...this.state };
        tmpState.action = action;
        tmpState.personId = toChange.personId;
        let tmpPeople = [...this.state.people];
        if (toChange.newPerson) {
            tmpPeople.push(toChange.newPerson);
            tmpState.personId = toChange.newPerson.id;
        }
        if (toChange.updatedPerson) {
            tmpPeople = tmpPeople.filter((person) => person.id !== toChange.updatedPerson.id);
            tmpPeople.push(toChange.updatedPerson);
        }
        if (toChange.deleteId) {
            tmpPeople = tmpPeople.filter((person) => person.id !== toChange.deleteId);
        }
        tmpState.people = tmpPeople;
        console.log(tmpState);
        super.setState(tmpState);
    }

    render() {
        let tmpView = <PersonList info={this.state} switch={this.changeView} />;
        switch (this.state.action) {
            case act.View:
                tmpView = <PersonView info={this.state} switch={this.changeView} />
                break;
            case act.Create:
                tmpView = <PersonCreate info={this.state} switch={this.changeView} />
                break;
            case act.Update:
                tmpView = <PersonUpdate info={this.state} switch={this.changeView} />
                break;
            case act.Delete:
                tmpView = <PersonDelete info={this.state} switch={this.changeView} />
                break;
            case act.ViewAll:
            default:
                // tmpView = <PersonList info={this.state} switch={this.changeView} />
                break;
        }
        return (
            <div className="Main">
                {tmpView}
            </div>
        );
    }
}

export default App;
