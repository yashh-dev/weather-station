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

var db =  firebase.database().ref('Weather_Monitoring_Station/');
db.on('value', (snapshot) => {
  var rain1,rain2;
  if(snapshot.val().Weather_Station_1.Rainfall1>300){
    rain1='Raining'
  }else{
    rain1='Not Raining'
  }
  if(snapshot.val().Weather_Station_2.Rainfall2>300){
    rain1='Raining'
  }else{
    rain1='Not Raining'
  }
  var air1,air2;
  if(snapshot.val().Weather_Station_1.AirQuality1>2000){
    air1='moderate'
  }
  else if(snapshot.val().Weather_Station_1.AirQuality1>3000){
    air1='bad'
  }
  else{
    air1='good'
  }
  if(snapshot.val().Weather_Station_2.AirQuality2>2000){
    air2='moderate'
  }
  else if(snapshot.val().Weather_Station_2.AirQuality2>3000){
    air2='bad'
  }
  else{
    air2='good'
  }
  air2='good'
  rain2='good'
  console.log(air1+" "+air2+" "+rain1+" "+rain2)
  air.innerHTML=air1;
  Humidity.innerHTML=snapshot.val().Weather_Station_1.Humidity1+"%";
  Pressure.innerHTML=snapshot.val().Weather_Station_1.Pressure1+"hPa";
  Rainfall.innerHTML=rain1;
  Temp.innerHTML=snapshot.val().Weather_Station_1.Temp1+"°C";
  console.log(snapshot.val());

  air1.innerHTML=air2;
  Humidity1.innerHTML=snapshot.val().Weather_Station_2.Humidity2+"%";
  Pressure1.innerHTML=snapshot.val().Weather_Station_2.Pressure2+"hPa";
  Rainfall1.innerHTML=rain2;
  Temp1.innerHTML=snapshot.val().Weather_Station_2.Temp2+"°C";
  console.log(snapshot.val());
});
console.log("okey");

var now = new Date();
document.getElementById('date').innerText=now.toDateString();
 