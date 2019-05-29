import React, { Component } from "react";

//Full app in separate repository "fileUpload-react-express"

class FileUploadApp extends Component {
  state = {
    selectedFile: null
  };

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  fileUploadHandler = () => {
    console.log(this.state.selectedFile);
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectHandler} />
        <button className="buttonBlue button5 " onClick={this.fileUploadHandler}>
          Upload
        </button>
      </div>
    );
  }
}

export default FileUploadApp;
