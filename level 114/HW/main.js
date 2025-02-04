const thermo = {
    _c: 0,
    get t() {
        return (this._c * 9/5) + 32;
    },
    set t(c) {
        if (typeof c === "number") this._c = c;
        else console.error("Invalid input!");
    }
};

const grade = {
    _s: 0,
    get g() {
        return this._s >= 90 ? "A" :
               this._s >= 80 ? "B" :
               this._s >= 70 ? "C" :
               this._s >= 60 ? "D" : "F";
    },
    set s(v) {
        if (typeof v === "number" && v >= 0 && v <= 100) this._s = v;
        else console.error("Invalid score!");
    }
};

const secPwd = {
    _p: "",
    get p() {
        return "*****";
    },
    set p(n) {
        if (typeof n === "string" && n.length >= 6) this._p = btoa(n);
        else console.error("Invalid password!");
    }
};

// testing 
thermo.t = 25;
console.log(thermo.t); 

grade.s = 85;
console.log(grade.g); 

secPwd.p = "mypwd123";
console.log(secPwd.p); 
console.log(secPwd._p); 


// this code is writen with help of AI because of algorithems beeing on the same day as my lessons I have to ceatch up