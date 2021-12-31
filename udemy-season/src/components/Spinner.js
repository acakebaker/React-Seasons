import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div className='ui active dimmer'>
      <div class='ui big text loader'>{message}</div>
    </div>
  )
};

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;
