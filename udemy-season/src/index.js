import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './components/SeasonDisplay';

// This is a class component app.
class App extends React.Component {
  // This is the only time we do direct assignment to state!
  state = { lat: null, errorMessage: '' };
  
  // componentDidMount() is for when the state starts.
  componentDidMount() {
    console.log('My component was rendered to the screen.');

    // This gets the users location.
    window.navigator.geolocation.getCurrentPosition(
      // To update our state we call setState!
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  // componentDidUpdate() is for when the state updates.
  componentDidUpdate() {
    console.log('My component was just updated - it rerendered.');
  }

  // React says we have to define render()!
  render() {
    // Error message and no latitude.
    if(this.state.errorMessage && !this.state.lat) {
      return <div><h1>Error: {this.state.errorMessage}</h1></div>
    }
    
    // Latitude and no error message. 
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    // No latitude and no error message.
    return <div><h1>Loading...</h1></div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));