
test("test for jest", () => {
    const captcha = new CaptCha(1, 1, 1, 1)
    expect("1").toBe(captcha.getLeftOperand())
})