import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyAdmPOeMl_kYvy0SpuSN4jmhWgtgBgizEs",
 authDomain: "shop1688mkt.firebaseapp.com",
 databaseURL: "https://shop1688mkt.firebaseio.com",
 projectId: "shop1688mkt",
 storageBucket: "shop1688mkt.appspot.com",
 messagingSenderId: "359212500160",
 appId: "1:359212500160:web:0eee6dfb29983add"
};
const db = firebase.initializeApp(firebaseConfig);
export {
 db
};
