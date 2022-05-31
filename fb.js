 // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration

 const firebaseConfig = {

  apiKey: "AIzaSyD5xn5NzrOqHsiGM35put5q7saDmy2_Gzw",

  authDomain: "weatherstationmonitor.firebaseapp.com",

  databaseURL: "https://weatherstationmonitor-default-rtdb.firebaseio.com",

  projectId: "weatherstationmonitor",

  storageBucket: "weatherstationmonitor.appspot.com",

  messagingSenderId: "823344598300",

  appId: "1:823344598300:web:5a65ea82592d438c227ed9"

};
 console.log("okey");
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 var air = document.getElementById('air');
 var Humidity = document.getElementById('humidity');
 var Pressure = document.getElementById('pressure');
 var Rainfall = document.getElementById('rainfall');
 var Temp = document.getElementById('temp');

 var air1 = document.getElementById('air1');
 var Humidity1 = document.getElementById('humidity1');
 var Pressure1 = document.getElementById('pressure1');
 var Rainfall1 = document.getElementById('rainfall1');
 var Temp1 = document.getElementById('temp1');
 var chennai=document.getElementById('chennai');
 var madurai=document.getElementById('madurai')
 var db =  firebase.database().ref('Weather_Monitoring_Station/');
db.on('value', (snapshot) => {
  air.innerHTML=snapshot.val().Weather_Station_1.AirQuality1>50?'Bad':'good';
  Humidity.innerHTML=snapshot.val().Weather_Station_1.Humidity1+"%";
  Pressure.innerHTML=snapshot.val().Weather_Station_1.Pressure1+"hPa";
  Rainfall.innerHTML=snapshot.val().Weather_Station_1.Rainfall1>300?'Raining':'Not Raining';
  if(snapshot.val().Weather_Station_1.Rainfall1>300)
  {
    console.log('raining')
    chennai.style.backgroundImage="url('rainy.jpg')";
    chennai.style.color="white"
  }else{

    chennai.style.backgroundImage="url('cloudy.jpg')";
    chennai.style.color="black"
  }
  
  Temp.innerHTML=snapshot.val().Weather_Station_1.Temp1+"°C";
  console.log(snapshot.val());

  air1.innerHTML='good';
  Humidity1.innerHTML=snapshot.val().Weather_Station_2.Humidity2+"%";
  Pressure1.innerHTML=snapshot.val().Weather_Station_1.Pressure1+"hPa";
  Rainfall1.innerHTML=snapshot.val().Weather_Station_2.Rainfall2>300?'Raining':'Not Raining';
  if(snapshot.val().Weather_Station_2.Rainfall2>300)
  {
    console.log('raining')
    madurai.style.backgroundImage="url('rainy.jpg')";
    madurai.style.color="white"
  }else{

    madurai.style.backgroundImage="url('cloudy.jpg')";
    madurai.style.color="black"
  }
  
  Temp1.innerHTML=snapshot.val().Weather_Station_1.Temp1+"°C";
  console.log(snapshot.val());
});
console.log("okey");

var now = new Date();
document.getElementById('date').innerText=now.toDateString();
 
