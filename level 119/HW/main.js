function students (lst) {
    const map = new Map();
    for (let i of lst) {
        map.set(i.split(": ")[0], i.split(": ")[1]);
    };
    return map
}

//2 

function student(lst){
    const map = new Map();
    for (let i of lst){
     console.log(i)
     map.set(i.split(": ")[0], i.split(": ")[1]);

    };
    return map;
}

//3 

function student(map){
    for (let [key, value] of map){
        map.set(key, value+5);

    };
    return map;
};



function storeStudentScores(studentList) {

    const studentScores = new Map();

    studentList.forEach(student => {
        studentScores.set(student.name, student.score);
    });


    return studentScores;
}

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 88 }
];

const scoresMap = storeStudentScores(students);


console.log(scoresMap);


console.log("Alice's score:", scoresMap.get('Alice')); 
console.log("Bob's score:", scoresMap.get('Bob'));    
