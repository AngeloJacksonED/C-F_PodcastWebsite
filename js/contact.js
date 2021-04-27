//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyC6WEAjthBJJyR4Xwc_wVew4Vw5pxwJwvg",
  authDomain: "camel-frog-podcast-database.firebaseapp.com",
  databaseURL: "https://camel-frog-podcast-database-default-rtdb.firebaseio.com/",
  projectId: "camel-frog-podcast-database",
  storageBucket: "camel-frog-podcast-database.appspot.com",
  messagingSenderId: "729328811734",
  appId: "1:729328811734:web:e82b698453287c64ac5377"
};
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("fomData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let firstName = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mess = document.getElementById('mess').value
  
    //Save Form Data To Firebase
    db.doc().set({
      fname: firstName,
      email: email,
      mess: mess
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Success! Your form is submitted for staff to look at. We will be in touch.")
  })