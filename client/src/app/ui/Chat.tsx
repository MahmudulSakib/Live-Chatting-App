import React from "react";
import InfoBar from "../components/InfoBar/InfoBar";
import Messages from "../components/Messages/Messages";
import Input from "../components/Input/Input";
import TextContainer from "../components/TextContainer/TextContainer";

const Chat = ({
  room,
  messages,
  setMessage,
  message,
  sendMessage,
  users,
  name,
}: {
  room: string;
  messages: { user: string; text: string }[];
  setMessage: (msg: string) => void;
  message: string;
  sendMessage: (e: React.FormEvent | React.KeyboardEvent) => void;
  users: { name: string }[];
  name: string;
}) => {
  return (
    <div
      id="root"
      className="flex flex-col md:flex-row justify-center items-stretch h-screen w-full bg-gray-100"
    >
      <div className="flex flex-col flex-1 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <InfoBar room={room} />
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <Messages messages={messages} name={name} />
        </div>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <div className="hidden md:block w-1/4 p-4">
        <TextContainer users={users} />
      </div>
    </div>
  );
};

export default Chat;
