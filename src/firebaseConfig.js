import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxDHIPPnEbgCqWTU3fAg4ijWpdMKZBX_I",
    authDomain: "my-articles-a1641.firebaseapp.com",
    projectId: "my-articles-a1641",
    storageBucket: "my-articles-a1641.appspot.com",
    messagingSenderId: "927516968432",
    appId: "1:927516968432:web:218621d243d6a97da2c935"
  };
  
  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth = getAuth(app);