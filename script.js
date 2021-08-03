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
