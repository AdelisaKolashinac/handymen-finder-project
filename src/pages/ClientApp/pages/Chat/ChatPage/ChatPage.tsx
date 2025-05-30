import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useUserStore } from "../../../../../stores/userStore";
import { db } from "../../../../../lib/firebase";
import { MessageType } from "../../../../../types/types";
import styles from "./ChatPage.module.css";
import { useFetchHandymen } from "../../../../../hooks/useFetchHandymen";

export default function ChatPage() {
  const { chatId } = useParams();
  const user = useUserStore((state) => state.user);
  const { handymen } = useFetchHandymen();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [otherUserData, setOtherUserData] = useState({
    name: "",
    img: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId!, "messages");
    const q = query(messagesRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageDocs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          senderId: data.senderId,
          text: data.text,
          createdAt: data.createdAt ?? null,
        };
      });
      setMessages(messageDocs);
    });

    return () => unsubscribe();
  }, [chatId]);

  // Scroll to bottom every time messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const fetchOtherUserName = async () => {
      if (!chatId || !user) return;

      const chatDoc = await getDoc(doc(db, "chats", chatId));
      const participants = chatDoc.data()?.participants || [];

      const otherUserId = participants.find((id: string) => id !== user.id);
      const handyman = handymen.find((h) => h.id === otherUserId);

      if (handyman) {
        setOtherUserData({
          name: handyman.name,
          img: handyman.img,
        });
      }
    };

    fetchOtherUserName();
  }, [chatId, handymen, user]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const message = {
      senderId: user?.id,
      text: input,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "chats", chatId!, "messages"), message);

    await updateDoc(doc(db, "chats", chatId!), {
      lastMessage: input,
      lastUpdated: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={`wrapper ${styles.chatPage}`}>
      <div
        style={{
          height: "80vh",
          overflowY: "scroll",
        }}
      >
        <div className={styles.chatPage__header}>
          <div className={styles.chatPage__headerLeft}>
            <Link to="/chat">
              <img
                src="/arrows&location/arrow-left.png"
                alt="Go back to chat list"
              />
            </Link>
            <img
              src={otherUserData.img}
              alt="Handyman Photo"
              className={styles.chatPage__Avatar}
            />
            <p>{otherUserData.name}</p>
            <img src="/icons/blue-check-icon.png" alt="Check icon" />
          </div>
          <div className={styles.chatPage__headerRight}>
            <img src="/icons/camera-icon.png" alt="Video call" />
            <img src="/icons/phone-icon-2.png" alt="Audio call" />
          </div>
        </div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.chatPage__message} ${
              msg.senderId === user?.id
                ? styles.messageRight
                : styles.messageLeft
            }`}
          >
            <p
              className={styles.chatPage__messageText}
              style={{
                background: msg.senderId === user?.id ? "#dcf8c6" : "#f0f0f0",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.chatPage__InputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className={styles.chatPage__Input}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className={styles.chatPage__sendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
}
