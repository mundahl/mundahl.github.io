var a = ["1", "2"];
var b = ["5", "6"];
var emptyArr = [];
var c = 0;
for (var aa = 0; aa < a.length; aa++) {
  for (var bb = 0; bb < b.length; bb++) {
    emptyArr[c] = a[aa] + b[bb];
    c++;
  }
}
for (var cc = 0; cc < emptyArr.length; cc++) {
  alert(emptyArr[cc])
}

var a = new Date();
var b = a.getDay();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[b]);

var a = new Date();
var hrs = a.getHours();
a.setHours(hrs+1);
alert(a);

function namPlz() {
    var a = prompt("Enter name");
    alert(a);
}
namPlz();