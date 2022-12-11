import * as firebase from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDISjMbN79lGVlxCfN8HlzzrVwCF8ZVI4s",
	authDomain: "nextjsapp-4a599.firebaseapp.com",
	projectId: "nextjsapp-4a599",
	storageBucket: "nextjsapp-4a599.appspot.com",
	messagingSenderId: "596910145144",
	appId: "1:596910145144:web:6dd90f4212ec2c0ced778d",
};

firebase.initializeApp(firebaseConfig);

export const loginWithGithub = () => {
	const gitHubProvider = new GithubAuthProvider();
	const auth = getAuth();
	return signInWithPopup(auth, gitHubProvider);
};
