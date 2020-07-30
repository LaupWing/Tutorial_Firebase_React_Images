import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_5O6dfDgr2S420E_EY-pUtrs_sQ1yo5w",
    authDomain: "photogallery-tutorial-netninja.firebaseapp.com",
    databaseURL: "https://photogallery-tutorial-netninja.firebaseio.com",
    projectId: "photogallery-tutorial-netninja",
    storageBucket: "photogallery-tutorial-netninja.appspot.com",
    messagingSenderId: "525636829600",
    appId: "1:525636829600:web:81ce2f8af82a3e606764c5",
    measurementId: "G-DQ3MZQVE81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export{
    projectFirestore,
    projectStorage
}
