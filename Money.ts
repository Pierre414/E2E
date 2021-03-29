class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount
    }
    times(multiplier): void {
        this.amount *= multiplier;
    }
    five: Dollar = new Dollar(5);

    functions = {
        testnmultiplication() {
            this.five.times(2)
        }

    }

}
module.exports = functions;


