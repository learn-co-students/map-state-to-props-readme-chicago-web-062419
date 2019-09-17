import React, { Component } from 'react';
// import connect so that we gain access to the STORE
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//outside of the App class, we write the mapStateToProps, where we define which state we want available to this component
const mapStateToProps = state => {
  return { items: state.items }
}

// Syncs up to our store and listens to each change that occurs.
// When a change occurs, it will invoke mapStateToProps function 
// App = the component that we want to connecting our state to
export default connect(mapStateToProps)(App);

// the connect method returns a new component that LOOKS like the APP but now contains the updated and correct data
