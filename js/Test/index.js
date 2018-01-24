
var html = '<h1>Hello, world!</h1>'


class Test extends React.Component {
    render() {
      return React.createElement("h1", {dangerouslySetInnerHTML: {__html: html}})
        // return (
        //   <div>
        //     <p>test</p>
        //   </div>
        // );
    }
}

ReactDOM.render(React.createElement(Test), document.getElementById('test'))