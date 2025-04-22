//@ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

interface MessageType {
  user: string;
  text: string;
}

const Messages = ({
  messages,
  name,
}: {
  messages: MessageType[];
  name: string;
}) => (
  <ScrollToBottom className="flex flex-col overflow-y-auto h-full px-4 py-2 space-y-2">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
