import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useUserStore } from "../stores/userStore";

export function useFirebaseAuthListener() {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          id: user.uid,
          fullname: user.displayName || "",
          email: user.email || "",
          phone: user.phoneNumber || "",
          type: "CLIENT",
          location: "Berlin",
        });
      } else {
        setUser(undefined);
      }
    });

    return () => unsubscribe();
  }, [setUser]);
}
