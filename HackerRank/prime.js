

function checkPrime(n) {
    var n_sqrt = Math.ceil(Math.sqrt(n));
    console.log("\n\tNumber \t\t: " + n);
    let flag = 0;
    var ar = [...Array(n_sqrt + 1).keys()];
    var filtered_array = ar.filter(a =>
        a > 1);
    filtered_array.reduce((a, c) => {
        if (n % c == 0)
            flag = 1;
    });
    if (flag == 0)
        console.log("\tOutput \t\t: PRIME");
    else
        console.log("\tOutput \t\t: NOT PRIME");
    console.log("\n");
    //console.log(performance.now());
}
console.time("Execution Time : ");
checkPrime(8);
console.timeEnd("Execution Time : ");
