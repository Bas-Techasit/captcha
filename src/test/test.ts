import exp from "constants";

const CaptCha = require('../index')


describe('Captcha', function () {

    describe('First Pattern', function () {

        test("Get left-operand should be 1", () => {
            const captcha = new CaptCha(1, 1, 1, 1)
            expect(captcha.getLeftOperand()).toBe("1")
       });

        test('Get left-operand should be 5', () => {
            const captcha = new CaptCha(1, 5, 1, 1)
            expect(captcha.getLeftOperand()).toBe("5")
        })

        test('Get left-operand should be 9', () => {
            const captcha = new CaptCha(1, 9, 1, 1)
            expect(captcha.getLeftOperand()).toBe("9")
        });

        test('Get right-operand should be One', () => {
            const captcha = new CaptCha(1, 1, 1, 1)
            expect(captcha.getRightOperand()).toBe("One")
        })

        test('Get right-operand should be Nine', () => {
            const captcha = new CaptCha(1, 1, 1, 9)
            expect(captcha.getRightOperand()).toBe("Nine")
        })

        test('Get right-operand should be Five', () => {
            const captcha = new CaptCha(1, 1, 1, 5)
            expect(captcha.getRightOperand()).toBe("Five")
        })

        test('Get operator should be +', () => {
            const captcha = new CaptCha(1, 1, 1, 1)
            expect(captcha.getOperator()).toBe("+")
        })

        test('Get operator should be -', () => {
            const captcha = new CaptCha(1, 1, 2, 1)
            expect(captcha.getOperator()).toBe("-")
        })

        test('Get operator should be *', () => {
            const captcha = new CaptCha(1, 1, 3, 1)
            expect(captcha.getOperator()).toBe("*")
        })
    });

    describe('Second Pattern', function () {

        test('Get left-operand should be One', () => {
            const captcha = new CaptCha( 2, 1, 1, 1)
            expect(captcha.getLeftOperand()).toBe('One')
        })

        test('Get left-operand should be Nine', () => {
            const captcha = new CaptCha(2, 9, 1, 1)
            expect(captcha.getLeftOperand()).toBe('Nine')
        })

        test('Get left-operand should be Five', () => {
            const captcha = new CaptCha(2, 5, 1, 1)
            expect(captcha.getLeftOperand()).toBe('Five')
        })

        test('Get right-operand should be 1', () => {
            const captcha = new CaptCha(2, 1, 1, 1)
            expect(captcha.getRightOperand()).toBe('1')
        })

        test('Get right-operand should be 9', () => {
            const captcha = new CaptCha(2, 1, 1, 9)
            expect(captcha.getRightOperand()).toBe('9')
        })
    });

});