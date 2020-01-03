import React, { Component } from 'react';

interface Props {
  child: React.Component;
  error: string;
  progress: boolean;
}

export class GeneralContainer extends Component<Props> {
  renderError = () => {
    const { error } = this.props;
    return error ? <div>Error</div> : null;
  };

  renderProgress = () => {
    const { error, progress } = this.props;
    if (progress && !error) {
      return <div>spin</div>;
    }
    return null;
  };

  render() {
    return <div></div>;
  }
}

export default GeneralContainer;
