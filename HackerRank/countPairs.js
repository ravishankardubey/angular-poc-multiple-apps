const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countPairs() {
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
        console.log("Element : " +elem);
        console.log("Frequency : " +freq);
        count = 0;
        //console.log(k);
        //console.log(in_array.length-1);
        for (var i = 0; i <= k; i++) {
            for (var j = i; j <= k; j++) {
                // console.log("Here"); 
                if (i == j && freq[j] > 1 && in_array[in_array.length-1] == 0)
                {
                    count++;
                    // console.log("Count : Match   : "+count); 
                }
                else if (elem[j] - elem[i] == in_array[in_array.length-1])
                {
                    count++;
                    // console.log("Count: UnMatch : "+count); 
                }
                  //console.log(elem[j]); 
                  
                //   console.log( elem[j] - elem[i]); 
            }
             
        }
        // console.log(in_array);
        // console.log(elem);
        // console.log(freq);
        console.log(count);
        // console.log("last elem : "+in_array[in_array.length-1]);
    });
}


countPairs();