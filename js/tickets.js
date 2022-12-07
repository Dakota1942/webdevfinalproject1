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
  $("input[type='button']").click(function(e) {
    e.preventDefault();
  
    // get the value of the form using serializeArray method
    var inputData = $('form').serializeArray();
  
    var data = {};
    inputData.forEach((entry)=>{
      console.log(entry);
      data[entry.name]=entry.value;
    });
    //console.log(data);
    firebase.firestore().collection("seatNums").add(data);
    /* clear the entry */
    $('form')[0].reset();
  });
  
  firebase.firestore().collection('seatNums').onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc){
      var s = doc.data().seatoptions;
      $('#reserved').text('Your seat ' + s + " has been reserved.")
      /*switch(s) {
        case "A": n1++; $('#ans1').text(n1);break;
        case "B": n2++; $('#ans2').text(n2);break;
        case "C": n3++; $('#ans3').text(n3);break;
        case "D": n4++; $('#ans4').text(n4);break;
        case "E": n5++; $('#ans5').text(n5);break;
      }*/
    });
  });