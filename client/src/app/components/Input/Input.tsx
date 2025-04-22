const Input = ({
  setMessage,
  sendMessage,
  message,
}: {
  setMessage: (msg: string) => void;
  sendMessage: (e: React.FormEvent | React.KeyboardEvent) => void;
  message: string;
}) => (
  <form
    className="flex items-center w-full border-t border-gray-300 px-4 py-2"
    onSubmit={(e) => {
      e.preventDefault();
      sendMessage(e);
    }}
  >
    <input
      className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyDown={(event) => event.key === "Enter" && sendMessage(event)}
    />
    <button
      type="submit"
      className="ml-3 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition cursor-pointer"
    >
      Send
    </button>
  </form>
);

export default Input;
