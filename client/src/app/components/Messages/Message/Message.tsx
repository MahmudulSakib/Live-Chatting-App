// @ts-ignore
import React from "react";
import ReactEmoji from "react-emoji";

interface MessageProps {
  message: {
    text: string;
    user: string;
  };
  name: string;
}

const Message = ({ message: { text, user }, name }: MessageProps) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return isSentByCurrentUser ? (
    <div className="flex justify-end items-center gap-1 my-0.5">
      <p className="text-xs text-gray-400 pr-1">{trimmedName}</p>
      <div className="bg-blue-600 text-white px-3 py-1.5 rounded-md max-w-[80%]">
        <p className="text-sm break-words leading-snug">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start items-center gap-1 my-0.5">
      <div className="bg-gray-300 text-gray-900 px-3 py-1.5 rounded-md max-w-[80%]">
        <p className="text-sm break-words leading-snug">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="text-xs text-gray-400 pl-1">{user}</p>
    </div>
  );
};

export default Message;
