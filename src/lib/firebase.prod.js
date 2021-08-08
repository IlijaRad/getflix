import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD_zMZF70MsyIuheliFVD955B6cNfs-YKg",
    authDomain: "netflix-890e3.firebaseapp.com",
    projectId: "netflix-890e3",
    storageBucket: "netflix-890e3.appspot.com",
    messagingSenderId: "104148471527",
    appId: "1:104148471527:web:0be9b4764a8798ef281c42"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };