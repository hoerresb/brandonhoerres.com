import React, { Component } from 'react';


/* const SearchBar = () => { // this is called a functional component
    return <input />;
}; */

// each class based object has a state
// if the state changes the render function will be re-run
// define a new class called searchbar and give it all the
// functionality tha the React.Component class has
// functional components do not have state
class SearchBar extends Component {
    constructor(props){
        // call to parent class
        super(props);
        //setting the state
        //only inside of the constructor function do we set state using this.state
        this.state = {term: ''};
    }
    // only update state by calling this.setState()
    // a controlled component has its input set by state
    // initial value is this.state.term or ''
    // when a user enters some text they call an event
    // the event changes the value of the state
    render() { // every class must have a render function that returns some jsx
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;