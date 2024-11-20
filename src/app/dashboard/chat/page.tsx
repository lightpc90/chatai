'use client';

import { useState } from 'react';
import ChatInput from '@/components/ChatInput';
import Message from '@/components/Message';

const ChatPage = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'system', content: 'Welcome to the AI Chat App!' },
  ]);

  const sendMessage = async (message: string) => {
    const newMessage = { role: 'user', content: message };
    setMessages((prev) => [...prev, newMessage]);

    // Mock API call; replace this with the actual Google Gemini API integration
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message }),
    });
    const data = await response.json();
    setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatPage;
