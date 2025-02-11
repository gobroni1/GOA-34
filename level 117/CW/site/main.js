class Calculator {
    static add = (a, b) => a + b;
    static sub = (a, b) => a - b;
}



const addition = document.getElementById("adition");
const subtraction = document.getElementById("subtraction");

const in1 = document.getElementById("in1").value;
const in2 = document.getElementById("in2").value;

addition.addEventListener("click", ()=>{
    const in1 = document.getElementById("in1").value;
    const in2 = document.getElementById("in2").value;
    console.log(Calculator.add(Number(in1),Number(in2)));
});



subtraction.addEventListener("click", ()=>{
    const in1 = document.getElementById("in1").value;
    const in2 = document.getElementById("in2").value;
    console.log(Calculator.sub(Number(in1),Number(in2)));
});


// if btn code was a class 

// class Listen {
//     static adbtn = document.getElementById("adition").addEventListener("click",()=>{
//         const in1 = document.getElementById("in1").value;
//         const in2 = document.getElementById("in2").value;
//         console.log(Calculator.add(Number(in1),Number(in2)));
//     });
// }
