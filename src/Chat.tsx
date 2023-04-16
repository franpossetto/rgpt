import "./Chat.css";

export const Chat = () => {
  return (
    <>
      <div className="app">
        <div className="sidemenu">
          <div className="sidemenu-container">
            <div className="new-chat-button">New Chat</div>
          </div>
        </div>
        <div className="chatbox">
          <div placeholder="Send a message..." className="input-chat" />
          <div className="chabot-input-log">
            <div className="chat-message">
              <div className="chat-message-center">
                <div className="avatar"></div>
                <div className="message">Hello, I'm Fran.</div>
              </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-center">
                <div className="avatar"></div>
                <div className="message">Hi, I am the AI.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
