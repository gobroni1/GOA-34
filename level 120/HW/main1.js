function qvnenakrebi(set1, set2){
    if(set1.size > set2.size){
        return qvnenakrebi(set2, set1)
    }
    for(let item of set1){
        if(!set2.has(item)){
            return false;
        };
    };
    return true;
};
console.log(qvnenakrebi(new Set([1, 2, 3]), new Set([1, 2])));

function fn2(map) {
    let ng = new Map(); 

    for (let [key, value] of map) { 
        ng.set(value, key); 
    }

    return ng; 
}


let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 1]
]);

console.log(fn2(map)); 

function maxKey(map) {
    let mV = Math.max(...map.values()); 
    let keys = []; 

    for (let [key, value] of map) { 
        if (value === mV) { 
            keys.push(key); 
        }
    }

    return keys; 
}


console.log(maxKey(new Map([
    ['a', 5],
    ['b', 3],
    ['c', 5]
])));
