import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../../lib/firebase";
import { useUserStore } from "../../../../../stores/userStore";
import styles from "./ChatList.module.css";
import { ChatPreview } from "../../../../../types/types";
import { useFetchHandymen } from "../../../../../hooks/useFetchHandymen";
import { formatDistanceToNow } from "date-fns";

export default function ChatList() {
  const user = useUserStore((state) => state.user)!;
  const [chats, setChats] = useState<ChatPreview[]>([]);
  const navigate = useNavigate();
  const { handymen } = useFetchHandymen();

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", user.id),
      orderBy("lastUpdated", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const chatDocs = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const otherUserId = data.participants.find(
            (id: string) => id !== user.id
          );

          const handyman = handymen.find(
            (handyman) => handyman.id === otherUserId
          );

          let otherUserData = { name: "Unknown", img: "/default-user.png" };

          if (handyman) {
            otherUserData = {
              name: handyman.name,
              img: handyman.img,
            };
          }

          return {
            id: doc.id,
            participants: data.participants,
            lastMessage: data.lastMessage,
            lastUpdated: data.lastUpdated,
            otherUserName: otherUserData.name,
            otherUserImg: otherUserData.img,
          };
        })
      );
      setChats(chatDocs);
    });

    return () => unsubscribe();
  }, [handymen, user.id]);

  const openChat = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <section className={`wrapper ${styles.chatList}`}>
      <div className={`border-bottom ${styles.chatList__header}`}>
        <div className={styles.chatList__headerTitle}>
          <h2>Chat</h2>
          <p>{chats.length}</p>
        </div>
        <img src="/icons/new-chat.png" alt="New Chat" />
      </div>
      <input
        type="text"
        name="conversation"
        placeholder="Search conversation"
        className={styles.chatList__search}
      />
      {chats.length === 0 ? (
        <p>No chats yet.</p>
      ) : (
        chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => openChat(chat.id)}
            className={`border-bottom ${styles.chatList__chatItems}`}
          >
            <div className={styles.chatList__chatInfo}>
              <img src={chat.otherUserImg} alt="Handyman photo" />
              <div>
                <p className={styles.chatList__chatName}>
                  {chat.otherUserName}
                </p>
                <p className={styles.chatList__chatMessage}>
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <p className={styles.chatList__lastMessageTime}>
              {formatDistanceToNow(chat.lastUpdated.toDate(), {
                addSuffix: true,
              })}
            </p>
          </div>
        ))
      )}
    </section>
  );
}
