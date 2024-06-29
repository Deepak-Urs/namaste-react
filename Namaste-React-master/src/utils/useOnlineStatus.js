import { useState, useEffect } from "react";

// hook to check online connections
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    // we use thebewlo 2 instead of setIsonline bcoz, code will be clean
    // in case of cleanup in useEffect, we can avoid the sam efunction again
    const handleOnline = () => {
        setIsOnline(true);
    }

    const handleOffline = () => {
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, [isOnline]);

    return isOnline;
}

export default useOnlineStatus;