function uf(sets) {
    let result = new Set(); 

    for (let set of sets) { 
        for (let item of set) { 
            result.add(item); 
        }
    }

    return result;
}


function sD(set1, set2) {
    let result = new Set(); 


    for (let item of set1) {
        if (!set2.has(item)) {
            result.add(item);
        }
    }


    for (let item of set2) {
        if (!set1.has(item)) {
            result.add(item);
        }
    }

    return result; 
}


function cF(str) {
    let frequencyMap = new Map();

    for (let char of str) { 
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1); 
        }
    }

    return frequencyMap; 
}
