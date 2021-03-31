  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7NWyNxvg2nOmhrZh8jP86thkrhD1BQs4",
    authDomain: "letschat-web-app-4dbc4.firebaseapp.com",
    databaseURL: "https://letschat-web-app-4dbc4-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-4dbc4",
    storageBucket: "letschat-web-app-4dbc4.appspot.com",
    messagingSenderId: "951403237154",
    appId: "1:951403237154:web:b585079a754df9ebe1df7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}


//End code
 } });  }); }
getData();

function redirectToRoomName(name) 
{
  console.log(name); 
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}