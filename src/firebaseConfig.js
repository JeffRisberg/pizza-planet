import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDysw-h_QWssqo1wnSssgXEBfjpHyleqs0",
  authDomain: "pizza-planet-7e281.firebaseapp.com",
  databaseURL: "https://pizza-planet-7e281.firebaseio.com",
  projectId: "pizza-planet-7e281",
  storageBucket: "pizza-planet-7e281.appspot.com",
  messagingSenderId: "836116087363"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()

export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
