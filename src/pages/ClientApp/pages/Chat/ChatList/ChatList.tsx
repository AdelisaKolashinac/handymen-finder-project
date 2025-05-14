import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "./ChatList.module.css";
import { db } from "../../../../../lib/firebase";
import { useUserStore } from "../../../../../stores/userStore";
import { handymen } from "../../../../../data/data";

interface Chat {
  id: string;
  userId: string;
  handymanId: string;
  lastMessage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatedAt: any;
}

interface User {
  id: string;
  fullname: string;
  location: string;
}

const ChatList = () => {
  const { user } = useUserStore();
  const [chats, setChats] = useState<Chat[]>([]);
  const [users, setUsers] = useState<{ [key: string]: User }>({}); // To store user details by ID
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return; // If no user, don't fetch chats

    const q = query(
      collection(db, "chats"),
      where("userId", "==", user.id), // Assuming you want chats where user is the client
      orderBy("updatedAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const chatData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Chat[];
      setChats(chatData);
    });

    return () => unsub();
  }, [user]);

  useEffect(() => {
    // Fetch user details from the JSON server using fetch
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        const usersData = await response.json();
        const usersById = usersData.reduce(
          (acc: { [key: string]: User }, user: User) => {
            acc[user.id] = user;
            return acc;
          },
          {}
        );
        setUsers(usersById);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const getUserName = (id: string) => {
    const user = users[id];
    return user ? user.fullname : "Unknown User";
  };

  const getHandymanName = (id: string) => {
    // Fetch handyman name from your handymen data (assuming `handymen` is imported)
    const handyman = handymen.find((h) => h.id === id);
    return handyman ? handyman.name : "Unknown Handyman";
  };

  const filteredChats = chats.filter((chat) =>
    chat.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.chatList}>
      <input
        className={styles.search}
        placeholder="Search messages"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className={styles.chatItems}>
        {filteredChats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => navigate(`/client-chat/${chat.id}`)}
            className={styles.chatItem}
          >
            <p>
              <strong>{getHandymanName(chat.handymanId)}</strong>
            </p>
            <p className={styles.preview}>{chat.lastMessage}</p>
            <p className={styles.clientInfo}>
              Client: {getUserName(chat.userId)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
