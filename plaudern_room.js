var firebaseConfig = {
    apiKey: "AIzaSyCFJD2f-kjWOfX-4P_dj1Vsj-WVvkoY8g8",
  authDomain: "kwitterproject-f1113.firebaseapp.com",
  databaseURL: "https://kwitterproject-f1113-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-f1113",
  storageBucket: "kwitterproject-f1113.appspot.com",
  messagingSenderId: "550993306925",
  appId: "1:550993306925:web:16778028e96f180f971fa4",
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function logout() {
    window.location = "index.html";
}

function addRoom() {
    room_name = document.getElementById("roomNameInput").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "plaudern_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
                //End code
            });
        });
}
getData();
function redirectToRoomName(){
    localStorage.setItem("room_name",room_name);
    
}