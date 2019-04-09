import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  //passses diferent title to each header
  constructor() {
    super();
    this.state = {
      title: "Welcome :)"
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    // setTimeout(() => {
    //   //re renders diferent header--> title after 2.5sec
    //   this.setState({ title: "Welcomeee Dommmmmmyyyyy !!" });
    // }, 2500);

    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <Footer />
      </div>
    );
  }
}
//IMPORTANT ... ADD ...bind(this) "this" is necessary so that title change fires on layout component, else nothing will happen cause header doesnt know about parent state(layout)
