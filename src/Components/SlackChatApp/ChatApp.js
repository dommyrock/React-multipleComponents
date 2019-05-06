//instead installing SDK (withnpm i @pushed/chatkit-client )
// same thing would be if we included <script src="index.pack.js"></script> in index.html
// ---> because uses CDN-s

import React from "react";
import Chatkit from "@pusher/chatkit-client";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import RoomList from "./RoomList";
import NewRoomList from "./NewRoomForm";

import { tokenUrl, instanceLocator } from "./config";

class ChatApp extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator, //key and variable which holds key called same so we can emmit (remove asignment)
      userId: "dommy",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    //connect returns promise(when resolved --->gives access to current user)
    //currentUser is INTERFACE for talking with chatkit API
    // messageLimit:20, 20 by default (specifies to fetch last 20 msgs when we join room)

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: "19393396",
        hooks: {
          onNewMessage: message => {
            console.log("message.text: ", message.text);
            this.setState({
              messages: [...this.state.messages, message] //we're copying/expanding old array to fit 1 etra item
            });
          }
        }
      });
    });
  }

  render() {
    console.log("this.state.messages: ", this.state.messages);

    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomList />
      </div>
    );
  }
}

export default ChatApp;
