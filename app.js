// Variables

function clock(){
  const fullDate = new Date();
var hours = fullDate.getHours();
var  mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
// Add Zero at the begining if value is less than 0
if (hours < 10){
  hours = "0" + hours;
}
if (mins < 10){
  mins = "0" + mins;
}
if (mins < 10){
  secs = "0" + secs;
}
// Change the values in the html
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
}
// Making the seconds count
setInterval(clock, 1000)