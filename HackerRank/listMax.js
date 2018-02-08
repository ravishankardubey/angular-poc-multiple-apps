const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*rl.question('Enter Array Size and number of operations : [Comma Separated]\n', (arr) => {
        //n = arr.split(",")[0];
        //m = arr.split(",")[1];
        //console.log(n+" : "+m);
        return arr;
        rl.close();
    });*/
/*rl.on('line', (line) => {
    //n = arr.split(",")[0];
    //m = arr.split(",")[1];
    //console.log(n+" : "+m);
    rl.close();
    console.log("i'm in rl!");
    return line;
});*/
// function listMax() {
//     console.log('Enter Array Size and number of operations : [Comma Separated]\n');
//     var arr = rl.on('line', function(line)  {rl.close();console.log("i'm in rl!");return line;});
//     console.log("i'm here!" + arr);
//     var n = arr.split(",")[0];
//     var m = arr.split(",")[1]; 
//     console.log(n+" : "+m);
// }
// listMax();

rl.question('Enter Array Size and number of operations : [Comma Separated]\n', (arr) => {
    var n = parseInt(arr.split(",")[0]);
    var m = parseInt(arr.split(",")[1]);
    var list = new Array(n).fill(0);
    list[0]++;
    console.log(list);
    var k = 0;
    var max = 0;
    var sum = 0;
    console.log(n + " : " + m);
    //rl.close();
    console.log("Enter Values of a, b, & k : [Comma Sparated]\n");
    //console.log(n + " : " + m);
    //for (var i = 0; i < 1; i++) {
    //console.log("Enter into the loop : " + i);
    //rl.close();
    rl.on('line', (line) => {
        arr = line.split(",");
        console.log(list);
        list[arr[0] - 1] += arr[2];
        if (arr[1] - 1 < n - 1)
            list[arr[1]] -= arr[2];
        k++;
        if (k >= m) {
            for (const val of list) {
                sum += val;
                if (sum > max)
                    max = sum;
            }
            console.log("Here");
            console.log(max);
            rl.close();
        }
    });

    //rl.close();
    //}

});