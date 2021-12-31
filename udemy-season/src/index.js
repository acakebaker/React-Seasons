import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    // Gets the users location.
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );

    return (
      <div>Latitude: </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));