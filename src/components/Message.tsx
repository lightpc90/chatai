interface MessageProps {
  role: string;
  content: string;
}

const Message = ({ role, content }: MessageProps) => {
  const isUser = role === 'user';
  return (
    <div className={`mb-4 ${isUser ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block px-4 py-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
