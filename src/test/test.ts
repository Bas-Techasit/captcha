const CaptCha = require('../index')


describe('Captcha', function () {

    test("Get left-operand should be 1", () => {
        const captcha = new CaptCha(1, 1, 1, 1)
        expect(captcha.getLeftOperand()).toBe("1")
    });

    test('Get left-operand should be 9', () => {
       const captcha = new CaptCha(1, 9, 1, 1)
       expect(captcha.getLeftOperand()).toBe("9")
    });
});