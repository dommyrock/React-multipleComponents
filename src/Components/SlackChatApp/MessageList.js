import React from "react";

const DUMMY_DATA = [
  {
    senderId: "dommy",
    text: " Hey, how is it going"
  },
  {
    senderId: "alis",
    text: " Great, how is it lalallaa"
  },

  {
    senderId: "dsdsd",
    text: " Bye, looserssss."
  }
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
