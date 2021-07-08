console.log(React.Component);

class Input extends React.Component {
  state = { task: "" };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.task}
          onChange={(e) => {
            this.setState({ task: e.currentTarget.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.props.taskHandlerFunction(this.state.task);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
