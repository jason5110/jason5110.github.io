class Test extends React.Component {
    render() {
      return (
        <div>
          <h1>
            Hello, world!
          </h1>
        </div>
      );
    }
}

ReactDOM.render(React.createElement(Test), document.getElementById('test'))