import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="container">
          <div className="columns">
            <div className="box column mt-5">
              <h2 className="has-text-color-danger">
                Something went wrong... :(
              </h2>
              <p>{error.toString()}</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
