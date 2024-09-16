var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n){
    let sum = 0;
    sum = n * (n + 1)/2;
    return sum;
};

var sum_to_n_c = function(n) {
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
};

