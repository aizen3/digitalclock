function digitalTime() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    document.getElementById('hour').innerHTML = hours + ":";
    document.getElementById('minute').innerHTML = minutes +":";
    document.getElementById('second').innerHTML = seconds;
      
    }
    setInterval(digitalTime, 1000);
    var fullDate = new Date();
var todayDate = fullDate.getDate();
var months = fullDate.getMonth()+1;
var year = fullDate.getFullYear();
if(todayDate<10){
  todayDate = '0'+ todayDate;
}
if(months<10){
  months = '0'+months;
}
document.getElementById('day').innerHTML = todayDate + "/";
document.getElementById('month').innerHTML = months + "/";
document.getElementById('fullYear').innerHTML = year;
