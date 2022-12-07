var firebaseConfig = {
    apiKey: "AIzaSyDphHsVVPxuhy3h80itV1j13kghqxN271g",
    authDomain: "seats-4409a.firebaseapp.com",
    projectId: "seats-4409a",
    storageBucket: "seats-4409a.appspot.com",
    messagingSenderId: "595803691521",
    appId: "1:595803691521:web:176326dd26ed3a0cbafe00",
    measurementId: "G-CD49NSYZET"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // save the data
  $(".signup input[type='submit']").click(function(e) {
    e.preventDefault();
  
    // get the value of the form using serializeArray method
    var inputData = $('form').serializeArray();
  
    var data = {};
    inputData.forEach((entry)=>{
      console.log(entry);
      data[entry.name]=entry.value;
    });
    console.log(data);
    firebase.firestore().collection("seatNums").add(data);
    /* clear the entry */
    $('form')[0].reset();
  });
  
  firebase
    .firestore()
    .collection('seatNums')
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        //console.log(doc.data().choice);
        //console.log(doc.data().comm);
      });
    });
  