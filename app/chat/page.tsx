'use client';

import ChatPage from '../components/ChatPage';
import socketIO from 'socket.io-client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const socket = socketIO('http://localhost:4000');

export default function ChatLayout() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    if (user) {
      return (
        <ChatPage socket={socket} user={user} />
      );
    } else {
      return (
        router.push('/')
      );
    }
}