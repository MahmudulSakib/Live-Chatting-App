"use client";

import Chat from "@/app/ui/Chat";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import io, { Socket } from "socket.io-client";

type Message = {
  user: string;
  text: string;
};

const ChatPage = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<{ name: string }[]>([]);

  const searchParams = useSearchParams();
  const namee = searchParams.get("name") ?? "";
  const roome = searchParams.get("room") ?? "";

  const socketRef = useRef<Socket | null>(null);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    setName(namee);
    setRoom(roome);
  }, [namee, roome]);

  useEffect(() => {
    if (name && room) {
      socketRef.current = io(ENDPOINT);

      socketRef.current.emit("join", { name, room }, () => {});

      socketRef.current.on("message", (message: Message) => {
        setMessages((prev) => [...prev, message]);
      });

      socketRef.current.on("roomData", ({ users }) => {
        setUsers(users);
      });

      return () => {
        socketRef.current?.emit("disconnect");
        socketRef.current?.off();
      };
    }
  }, [name, room]);

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (message && socketRef.current) {
      socketRef.current.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div>
      <Chat
        room={room}
        messages={messages}
        name={name}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        users={users}
      />
    </div>
  );
};

export default ChatPage;
