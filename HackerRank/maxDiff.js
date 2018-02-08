//var arr = prompt("Enter your numbers").split(",");
function maxDiff() {
    var arr = [4,1,2,3];
    var len = arr.length;
    var max = new Array(len);
    var min = new Array(len);
    max[len - 1] = arr[len - 1];
    min[0] = arr[0];
    var max_f = 0;

    for (var i = len - 2; i >= 0; i--) {
        if (max[i + 1] > arr[i])
            max[i] = max[i + 1];
        else
            max[i] = arr[i];
    }

    for (var i = 1; i < len; i++) {
        if (arr[i] < arr[i - 1])
            min[i] = arr[i];
        else
            min[i] = min[i - 1];
    }
    for (var j = 0; j < len; j++) {
        if (max[j] > min[j] && max_f < max[j] - min[j])
            max_f = max[j] - min[j];
    }
    return max_f;
}
//alert("maximum difference is : "+max_f);
console.log("The maximum difference is : " + maxDiff());