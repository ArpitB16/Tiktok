
var firebaseConfig = {
      apiKey: "AIzaSyD7xWGMpme9JDA-yc_fSB_dsrakkqwPE_o",
      authDomain: "kwitter-163e3.firebaseapp.com",
      databaseURL: "https://kwitter-163e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-163e3",
      storageBucket: "kwitter-163e3.appspot.com",
      messagingSenderId: "1071714175129",
      appId: "1:1071714175129:web:c3f996078e6248bd959008"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
      getData();


function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}