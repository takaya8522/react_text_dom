import React from "react";

class BaseErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>
            何かがおかしいようです。エラーを修正してブラウザを更新してください。
          </h3>
          <p>{this.state.error.toString()}</p>
          <pre>{this.state.info.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default BaseErrorBoundary;
