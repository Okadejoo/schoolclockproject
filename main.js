
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



function timeToString(time) {
    let diffIndays = time / (3600000*24);
    let dd = Math.floor(diffIndays);
    
    
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    
    let formattedDD = dd.toString().padStart(2, "0");
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

  
    return `${formattedDD}:${formattedHH}:${formattedMM}:${formattedSS}`;
  }
  
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));}, 10);
  }
  
  function pause() {
    clearInterval(timerInterval);
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00:00");
    elapsedTime = 0;
  }
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);




function firstFormat() {
    var date = new Date(); 
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var midDay = "AM";
    midDay = (hour >= 12) ? "PM" : "AM"; 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
    hour = updatedTime(hour);
    minute = updatedTime(minute);
    second = updatedTime(second);
    document.getElementById("clock").innerText = hour + " : " + minute + " : " + second + " " + midDay; 
      var t = setTimeout(firstFormat, 1000); 
    
  }
function secondFormat() {
    var dat = new Date(); 
    var hour = dat.getHours();
    var minute = dat.getMinutes();
    var second = dat.getSeconds();
    var midDay = "AM";
    midDay = (hour >= 24) ? "PM" : "AM"; 
    hour = (hour == 0) ? 24 : ((hour > 24) ? (hour - 24): hour); 
    hour = updatedTime(hour);
    minute = updatedTime(minute);       
    second = updatedTime(second);
    document.getElementById("clock").innerText =  hour + " : " +  minute + " : " + second + " " + midDay; 
    var t = setTimeout(secondFormat, 1000); 
     
  }
  
function updatedTime(x) { 
    if (x < 10) {
      return "0" + x;
    }
    else {
      return x;
    }
  }


 /* var userInput = document.getElementById("inp1");
 var y = "'" + userInput.value + "'";
 const countDownDate = new Date(y).getTime();
  document.getElementById("display").innerHTML = "00d " +  "00h " +  "00m " +  "00s " ;
 
    function countDown() { 
 
     var now = new Date().getTime();
     var timeleft = countDownDate - now;
        
     var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
     var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        document.getElementById("display").innerHTML = days + "d " +  hours + "h " + minutes + "m " + seconds + "s " ;
   "s " 
    }
     
     function startButton(){
  var myfunc = setInterval(countDown, 1000);
       if (seconds = 0) {
         clearInterval(myfunc);
       document.getElementById("display").innerHTML = "";
         document.getElementById("end").innerHTML = "TIME UP!!";
     }
     }
 function resetButton(){
     clearInterval();
    document.getElementById("display").innerHTML = "00d " +  "00h " +  "00m " +  "00s " 
 }
    */
  
