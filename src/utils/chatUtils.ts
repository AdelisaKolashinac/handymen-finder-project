import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Handyman, User } from "../types/types";

export async function createOrGetChat(
  currentUser: User,
  handymanUser: Handyman
): Promise<string> {
  const chatsRef = collection(db, "chats");

  // Check if chat already exists between these two users
  const q = query(
    chatsRef,
    where("participants", "array-contains", currentUser.id)
  );
  const snapshot = await getDocs(q);

  const existingChat = snapshot.docs.find((doc) => {
    const participants = doc.data().participants;
    return participants.includes(handymanUser.id);
  });

  // Return existing chat ID if found
  if (existingChat) {
    return existingChat.id;
  }

  // Create new chat
  const newChat = await addDoc(chatsRef, {
    participants: [currentUser.id, handymanUser.id],
    userDetails: {
      [currentUser.id]: {
        name: currentUser.fullname,
      },
      [handymanUser.id]: {
        name: handymanUser.name,
      },
    },
    lastMessage: "",
    lastUpdated: serverTimestamp(),
  });

  return newChat.id;
}
