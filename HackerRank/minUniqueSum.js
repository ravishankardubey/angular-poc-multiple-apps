function minUniqueSum() {
  //var arr = prompt("Enter the array").split(",");
  var arr = [1, 2, 2];
  var len = arr.length;
  var sum = 0;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] == arr[j])
        arr[i]++
    }
  }

  for (var i = 0; i < len; i++)
    sum += parseInt(arr[i]);


  //console.log("Minimum unique sum is : "+sum);
  return sum;

}
console.log("Minimum unique sum is : " + minUniqueSum());