var noOfOne = function (number) {
    var count = 0;
    var processed = true;
    var power = 1;
    while (processed) {
        if (number == 0) {
            processed = false;
            break;
        }
        if (Math.floor(number / power) == 0) {
            ++count;
            number = number - (Math.ceil(power / 2));
            power = 1;
        } else {
            power = power * 2;
        }
    }
    return count;
}


var countBits = function (num) {
    var output = [];
    for (var i = 0; i <= num; i++) {
       output.push(noOfOne(i));
    }
    return output;
};
console.log(countBits(5));