import { initializeApp } from 'firebase/app';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAKvldqLWEM9zWG2pnQgmunBFRWkkTOg1E',
	authDomain: 'linkup-e0c7e.firebaseapp.com',
	projectId: 'linkup-e0c7e',
	storageBucket: 'linkup-e0c7e.appspot.com',
	messagingSenderId: '796788256410',
	appId: '1:796788256410:web:3c53ecf9d2e5080237f923',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign Up New Users
export const SignupUser = async (email, password, Username) => {
	try {
		const UserCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = UserCred.user;
		console.log('Signed up as:', user);

		// await setDoc(doc(db, `Users/${user.uid}`), {
		// 	UserEmail: user.email,
		// 	Username: Username,
		// 	DisplayPicture: DefaultImage,
		// 	CreationDate: user.metadata.creationTime,
		// 	UID: user.uid,
		// 	Admin: false,
		// 	LastSeen: Date.now(),
		// });

		// await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Lists`), {
		// 	Favourites: [],
		// });

		// await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Recommendations`), {
		// 	Recommendations: [],
		// });

		// await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Friends`), {
		// 	Following: [],
		// 	Followers: [],
		// });

		console.log('User Creation Successful:');
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`Error ${errorCode}:`, errorMessage);
	}
};

// Sign In Existing Users
export const LoginUser = async (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Signed in as:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error ${errorCode}:`, errorMessage);
			alert('Invalid Credentials');
		});
};
