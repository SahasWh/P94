const firebaseConfig = {
    apiKey: "AIzaSyB5CiBT9V8TF21uOacnUNgZPOWQiihs6lw",
    authDomain: "project94-ffcc6.firebaseapp.com",
    projectId: "project94-ffcc6",
    storageBucket: "project94-ffcc6.appspot.com",
    messagingSenderId: "753514792159",
    appId: "1:753514792159:web:ed7c948923184e6fb5156a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();