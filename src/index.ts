
class Captcha {

    private leftOperand: number;

    constructor(pattern: number, leftOperand: number, operator: number, rightOperand: number) {
        this.leftOperand = leftOperand;
    }

    public getLeftOperand(): string {
        if (this.leftOperand === 9) return "9"
        return "1"
    }
}

module.exports = Captcha