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

export default function ChatList() {
  const user = useUserStore((state) => state.user)!;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chats, setChats] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", user.id),
      orderBy("lastUpdated", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatDocs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(chatDocs);
    });

    return () => unsubscribe();
  }, [user.id]);

  const openChat = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <div>
      <h2>Your Chats</h2>
      {chats.length === 0 ? (
        <p>No chats yet.</p>
      ) : (
        chats.map((chat) => {
          const otherUserId = chat.participants.find(
            (id: string) => id !== user.id
          );
          const otherUserName =
            chat.userDetails?.[otherUserId]?.name || "Unknown User";

          return (
            <div
              key={chat.id}
              onClick={() => openChat(chat.id)}
              style={{ cursor: "pointer" }}
            >
              <p>Chat with: {otherUserName}</p>
              <p>Last Message: {chat.lastMessage}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
