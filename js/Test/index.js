
var html = '<h1>Hello, world!</h1>'


class Test extends React.Component {
    render() {
      return React.createElement("h1", {dangerouslySetInnerHTML: {__html: html}})
    }
}

ReactDOM.render(React.createElement(Test), document.getElementById('test'))