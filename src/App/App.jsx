import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../Components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="d645e134-0524-4996-abe8-0083070d42e6"
        userName="Mahan"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
};

export default App;
