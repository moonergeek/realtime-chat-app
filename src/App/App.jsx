import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../Components/ChatFeed";
import LoginForm from "../Components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="d645e134-0524-4996-abe8-0083070d42e6"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
};

export default App;
