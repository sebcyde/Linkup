// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
export const Auth = getAuth();

//Signup New Users
export const SignupUser = async (email, password, auth = Auth) => {
	try {
		const UserCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log('Sign Up Succeszsful');
	} catch (error) {
		console.error(error);
		console.log('Sign Up Failed:', error);
	}
};

//Log In Existing Users
export const LoginUser = async (email, password, auth = Auth) => {
	try {
		const UserCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log('Log In Successful');
	} catch (error) {
		console.log('Log In Failed:', error.code);
		return error.code;
	}
};
