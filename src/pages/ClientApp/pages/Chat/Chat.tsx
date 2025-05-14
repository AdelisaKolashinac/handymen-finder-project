import styles from './Chat.module.css';
import { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useUserStore } from '../../../../stores/userStore';

interface Message {
  text: string;
  senderId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any;
}

interface ChatProps {
  handymanId: string;
}

const Chat: React.FC<ChatProps> = ({ handymanId }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const user = useUserStore(state=>state.user)
  const userId = user?.id;
  const chatId = [userId, handymanId].sort().join("_");

  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => doc.data() as Message);
      setMessages(fetched);
    });

    return () => unsubscribe();
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || !userId) return;

    await addDoc(collection(db, "chats", chatId, "messages"), {
      text: input.trim(),
      senderId: userId,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.messageBubble} ${
              msg.senderId === userId ? styles.sent : styles.received
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
