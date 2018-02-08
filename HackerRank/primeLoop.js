
function checkPrime(n) {
    var n_sqrt = Math.floor(Math.sqrt(n));
    console.log("\n\tNumber \t\t: " + n);
    var flag = 0;

    for (var i = 2; i <= n_sqrt; i++) {
        if (n % i == 0)
            flag = 1;
    }
    if (flag == 0)
        console.log("\tOutput \t\t: PRIME");
    else
        console.log("\tOutput \t\t: NOT PRIME");
    console.log("\n");
  
}
console.time("Execution Time : ");
checkPrime(8);
  console.timeEnd("Execution Time : ");