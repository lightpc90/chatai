import styles from "./dashboard.module.css";
import Image from "next/image"

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.texts}>
        <div className={styles.logo}>
          <Image className={styles.image} src="/logo.png" alt="logo" width={400} height={400} />
          <h1 className={styles.title}>Voltz AI</h1>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <Image className={styles.image} src="/chat.png" alt="chat image" width={400} height={400} />
            <span>Create a New Chat</span>
          </div>
          <div className={styles.option}>
            <Image className={styles.image} src="/image.png" alt="chat image" width={400} height={400} />
            <span>Analyse Image</span>
          </div>
          <div className={styles.option}>
            <Image className={styles.image} src="/code.png" alt="chat image" width={400} height={400} />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Ask me anything..."/>
          <button className={styles.button} type="submit">
            <Image className={styles.image} src="/arrow.png" alt="arrow image" width={400} height={400}/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard


