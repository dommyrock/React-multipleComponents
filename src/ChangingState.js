import React from "react";

class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this); //in it we use parent's(React.comp) method setState so we need to bind it to 'this'
  }
  handleClick() {
    this.setState(previousState => {
      return {
        count: previousState.count + 10
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button className="button button5" onClick={this.handleClick}>
          Change!
        </button>
      </div>
    );
  }
}

// export default ChangingState;
//****ANY TIME YOU USE setState METHOD YOU WANT TO BIND IT TO YOUR CLASS(inside class constructor)
//'this' references binded class

//If we dont care about previous state in handleClick method we can setState({}) to new object
//If we CARE about previous state
// !!!Cant type "count: previousState.count++" because that directly updates current state
//count: previousState.count + 1->adds +1 to current count and saves it as new prop of new state obj(returned form 'handleClick' method)

//Change state of 'count' prop with multiple functions(single state!!)
class ChangeStateTest extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickMulti10 = this.onClickMulti10.bind(this);
    this.onClickMulti1500 = this.onClickMulti1500.bind(this);
    this.onClickDevide = this.onClickDevide.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
  }
  onClickHandler() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  onClickMulti10() {
    this.setState(prevState => {
      return {
        count: prevState.count * 10
      };
    });
  }
  onClickMulti1500() {
    this.setState(ps => {
      return {
        count: ps.count * 1500
      };
    });
  }
  onClickDevide() {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      };
    });
  }
  onClickReset() {
    this.setState(prevState => {
      return {
        count: (prevState.count = 0)
      };
    });
  }
  render() {
    return (
      <div className="App">
        <button className="button5" onClick={this.onClickReset}>
          Reset
        </button>

        <h1>Count state:[{this.state.count}]</h1>

        <button className="button button5" onClick={this.onClickHandler}>
          Add +1
        </button>
        <button className="button button5" onClick={this.onClickMulti10}>
          Multiply x10
        </button>
        <button className="button button5" onClick={this.onClickMulti1500}>
          Multiply x1500
        </button>
        <button className="button button5" onClick={this.onClickDevide}>
          Devide by2
        </button>
      </div>
    );
  }
}

export default ChangeStateTest;
