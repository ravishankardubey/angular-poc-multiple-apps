const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfTwo() {
    let in_array;
    rl.question('Enter an Arrays [Comma Seperated]\n', (arr) => {
        in_array = arr.split(",");
        rl.close();
        in_array.sort(function (a, b) {
            return a - b
        });
        //var distinctSet = new Set(in_array);

        var elem = [];
        var freq = [];
        var pre = in_array[0];
        var count = 0;
        var k = 0;
        for (var i = 0; i < in_array.length - 1; i++) {
            if (pre == in_array[i]) {
                count++;
            } else {
                elem[k] = pre;
                freq[k] = count;
                pre = in_array[i];
                count = 1;
                k++;
            }
        }
        elem[k] = pre;
        freq[k] = count;
        console.log(in_array);
        console.log(elem);
        console.log(freq);
        count = 0;
        for (var i = 0; i <= k - 1; i++) {
            for (var j = i + 1; j <= k; j++) {
                if (parseInt(freq[i]) > 1 && parseInt(elem[i]) * 2 == parseInt(in_array[in_array.length - 1]))
                    count++;
                else if (parseInt(elem[i]) + parseInt(elem[j]) == parseInt(in_array[in_array.length - 1]))
                    count++;

            }
        }
        console.log(count);


        //var iterator = distinctSet.entries(); 
        //console.log(iterator.next())
        //console.log(distinctSet.size);
    });
    //in_array.sort(function(a, b){return a - b});
    //var distinctSet = new set(in_array);
    //return in_array;
}
sumOfTwo();