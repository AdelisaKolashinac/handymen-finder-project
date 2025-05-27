import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useUserStore } from "../../../../../stores/userStore";
import { db } from "../../../../../lib/firebase";

export default function ChatPage() {
  const { chatId } = useParams();
  const user = useUserStore((state) => state.user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId!, "messages");
    const q = query(messagesRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageDocs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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
    <div style={{ paddingBottom: "6rem" }}>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.senderId === user?.id ? "right" : "left",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                background: msg.senderId === user?.id ? "#dcf8c6" : "#f0f0f0",
                borderRadius: "10px",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {/* This empty div will be scrolled into view */}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={sendMessage} disabled={!input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}
