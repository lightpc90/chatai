'use client';

import { useState, useRef, useEffect, MutableRefObject } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLInputElement | null>(null)

  useEffect(()=>{
    endRef.current && endRef.current.scrollIntoView({behavior: "smooth"})
  })

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div ref={endRef} className="flex items-center p-4 bg-white border-t">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
