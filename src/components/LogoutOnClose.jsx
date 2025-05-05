import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogoutOnClose = () => {
    useEffect(() => {
        const handleUnload = () => {
            signOut(auth).catch((error) => console.error("Logout fejlede:", error));
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    return null; // Ingen UI, kun funktionalitet
};

export default LogoutOnClose;
