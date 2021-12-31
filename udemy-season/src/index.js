import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

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

  // Returns the render content to the app.
  renderContent() {
    // Has error message and no latitude.
    if(this.state.errorMessage && !this.state.lat) {
      return (
        <div className='season-display'>
          <h1>Could not determine your location.</h1>
        </div>
      );
    }
    
    // Has latitude and no error message. 
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    // Has no latitude and no error message.
    return <Spinner message='Please accept location request.' />;
  }

  // React says we have to define render()!
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));