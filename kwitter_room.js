
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBsFrkvn9JEsVgjjGvVxIbtW0C0Z-m9nDg",
      authDomain: "kwitter-5f780.firebaseapp.com",
      projectId: "kwitter-5f780",
      storageBucket: "kwitter-5f780.appspot.com",
      messagingSenderId: "868258422160",
      appId: "1:868258422160:web:08f4d00d0f6c02dd036715"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
