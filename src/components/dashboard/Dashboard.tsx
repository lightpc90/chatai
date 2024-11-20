import "./dashboard.module.css";
import Image from "next/image"

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={400} height={400} />
          <h1>Voltz AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <Image src="/chat.png" alt="chat image" width={400} height={400} />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <Image src="/image.png" alt="chat image" width={400} height={400} />
            <span>Analyse Image</span>
          </div>
          <div className="option">
            <Image src="/code.png" alt="chat image" width={400} height={400} />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Ask me anything..."/>
          <button type="submit">
            <Image src="/arrow.png" alt="arrow image" width={400} height={400}/>
          </button>
        </form>
      </div>
    </div>
  );
};


