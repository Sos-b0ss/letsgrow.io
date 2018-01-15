import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './main-button';

class Search extends React.Component {
  render() {
    return <Button href = "http://lmgtfy.com/?q=How+to+grow+%22herb%22" />
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
