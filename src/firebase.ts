import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyDLfOIAwv_U4aJuGOUTCkhMFkfJbS4eVtg",
  authDomain: "servicepwa-10006.firebaseapp.com",
  projectId: "servicepwa-10006",
  storageBucket: "servicepwa-10006.firebasestorage.app",
  messagingSenderId: "452633816760",
  appId: "1:452633816760:web:36a6325cdea059a1978e4d",
  measurementId: "G-NPCSSYSC7H"
};


const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);


export const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");

      const token = await getToken(messaging, {
        vapidKey: "BCsUDjWf1EPq0JQszv5jEbvWBI0_iyMTR6mt_3QO410ekcp1bDHaV_obwxM0d4UmfKSoZUgs_sydGIscICxu34w"
      });
      console.log("FCM Token: ", token);
    } else {
      console.error("Notification permission denied");
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error);
  }
};


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Foreground notification received:", payload);
      resolve(payload);
    });
  });

export { messaging };
