var dailyTemperatures = function(T) {
    var list = [];
    for(var i=0;i<T.length;i++){
        var element = T[i];
        list[i] = 0;
        for(var j= i+1;j<T.length;j++){
            if(T[j] > element) {
                list[i] = j-i;
                break;
            }
        }
    }
    return list;
};
