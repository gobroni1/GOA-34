class Card {
    constructor(pin, person, moneydef){
        this.pin = pin;
        this.money = moneydef;
        this._person = person;
    }

    put(mn){
        this.money += mn;
        console.log("deposit made")
    }

    takeOut (mn,inpin){
        if (inpin != this.pin){
            console.log("wrong pin");
            return;
        }
        if (mn > this.money){
            console.log("not enough money");
        }else{
            this.money-=mn;
            console.log("money taken out");
        }
    }

    get info(){
        return {
            person: `${this._person[0]} ${this._person[1]}`,
            balance: this.money
        };
    }
}