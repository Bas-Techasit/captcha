

class Captcha {

    private readonly leftOperand: number
    private readonly rightOperand: number
    private readonly operator: number
    private readonly pattern: number

    constructor(pattern: number, leftOperand: number, operator: number, rightOperand: number) {
        this.leftOperand = leftOperand
        this.rightOperand = rightOperand
        this.operator = operator
        this.pattern = pattern
    }

    public getLeftOperand(): string {
       if (this.pattern === 2) return numericString[this.leftOperand]
        return this.leftOperand.toString()
    }

    public getRightOperand(): string {
        if (this.pattern === 2) return this.rightOperand.toString()
       return numericString[this.rightOperand]
    }

    public getOperator(): string {
        enum Operator { "+" = 1, "-", "*" }
        return Operator[this.operator]
    }

}

enum numericString {
    "One" = 1,
    "Two",
    "Three" ,
    "Four" ,
    "Five" ,
    "Six" ,
    "Seven" ,
    Eight ,
    "Nine",
}


module.exports = Captcha