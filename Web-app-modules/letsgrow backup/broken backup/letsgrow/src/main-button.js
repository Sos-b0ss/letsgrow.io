import React from 'react';

export class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.Search}>
          Search how to grow herb here!
        </button>
      );
    }
}
