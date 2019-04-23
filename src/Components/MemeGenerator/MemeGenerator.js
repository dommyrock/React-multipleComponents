import React, { Component } from "react";
//Here we make API call and save response to prop allMemeImgs{} array
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }
  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  //preventDefault so it doesnt refresh our page
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    //set 'randomImg' to the '.url' of the random item
    this.setState({
      randomImg: randMemeImg
    });
  }

  render() {
    // console.log(this.state.randomImg);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="button5">Generate</button>
          <br />
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Input something"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Input something"
            onChange={this.handleChange}
          />
        </form>
        {/* <div> */}
        <h2>{this.state.topText}</h2>
        <h2>{this.state.bottomText}</h2>
        <img src={this.state.randomImg} alt="" />

        {/* </div> */}
      </div>
    );
  }
}

export default MemeGenerator;
