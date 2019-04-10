// Lifecycle methods ---------------------------------------------------------What they do?
//   //mostly used  in API calls for fetching data from external store
//   componentDidMount() {}

//   //used to check if new props are different from existing props(will be depricatd in react17)
//   componentWillReceiveProps(nextProps) {
//     if (nextPtops.whatever !== this.props.whatever) {
//       //do something here
//     }
//   }

//   //used to check if changed component should update(used in larger apps for performance reasons)
//   shouldComponentUpdate(nextProps, nextState) {
//     //return true if u want to update
//     //return false if not
//   }

//   //for cleaning up the dom/app
//   componentWillUnmount() {
//     //tardown or cleanup your code before component disspears
//     //E.g. remove event listener
//   }

//   //NEW lyfecycle methods added in reactv17 are
//   //(rare use)when your component needs to take received props and set its own state based on those props
//   static getDerivedStateFromProps() {
//     //return new, updated state based upon the props
//   }
//   getSnapshotBeforeUpdate() {
//     //for backing up data
//   }
import React, { Component } from "react";
import Condiotional from "./Components/Conditional/Conditional";
class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500); //changes prop of 'isLoading' false- 1.5s after component loaded
  }
  render() {
    return (
      <div>{this.state.isLoading ? <h1>Loading...</h1> : <Condiotional />}</div>
    );
  }
}

// export default LifeCycleMethods;

//&& operator(checks if statement is truethy) used for truthy/falsey (usualy to shorten up sintax)
// true && false ---returns false  (because it checks if stateement is true --if its not returns it)
//false && false -immediately returns false (bcs 1st statement is false)
class LifeCycleMethods2 extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [1, 2]
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && ( //only show message if we have unread msg else dont show nothing
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}
export default LifeCycleMethods2;
