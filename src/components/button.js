import React, {Component} from 'react';
import $ from 'jquery';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    let _this = this;
    $.get("https://api.myjson.com/bins/6h7yh", function(data) {
      let countVal = parseInt(data.count);
      _this.setState({count: countVal});
    });
  }
  componentDidUpdate(prevState, nextState) {
    let _this = this;
    $.get("https://api.myjson.com/bins/6h7yh", function(data) {
      let countVal = parseInt(data.count);
      _this.setState({count: countVal});
    });
  }
  handleClick() {
    let count = this.state.count + 1;

    $.ajax({
      url: "https://api.myjson.com/bins/6h7yh",
      type: "PUT",
      data: `{"count": "${count}"}`,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
    });
  }
  render() {
    return (
      <div className="Button">
        <div id="count" className="text">{this.state.count}</div>
        <div className="text text-lg">times!</div>
        <div className="text text-md">Go ahead and give it a click</div>
        <button type="button" className="click_count" onClick={this.handleClick.bind(this)}>Click Me!</button>
      </div>
    );
  }
}
