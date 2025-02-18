function fnc1 (name, callback) {
    setTimeout(function() {
        callback(`hello ${name}`);
    }, 2000);
}

function delayedMessage(message, callback) {
    setTimeout(function() {
        console.log(message); 
        callback(); 
    }, 2000);
}


delayedMessage("nice", function() {
    console.log("all good"); 
});

function fnc2 (nums, callback){
    let res = [];
    let cnt = 0;

    nums.forEach((num, index)=>{
        setTimeout(function(){
            res[index] = num*num;
            cnt ++;
            if (cnt === nums.length){
                callback(res);
            }
        }, index * 1000);
    });
}

fnc2([1, 2, 3, 4], function(result) {
    console.log(result);  
});
