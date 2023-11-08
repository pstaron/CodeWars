function expand(str) {
    const text = n => n < 2 ? 1 : n * text(n - 1);
    let result = '', [_, o, x, b, n] = str.match(/\((-?\d*)([a-z])([-+]\d+)\)\^(\d+)/);
    o = o ? o === '-' ? -1 : parseInt(o) : 1;
    b = parseInt(b); n = parseInt(n);
    for (let i = n; i >= 0; i--) {
        let k = n - i;
        let c = !b && k > 0? 0: o**i * b**k * (k === 0? 1: text(n) / (text(k) * text(n - k)));
        if (Math.abs(c) === 1 && i > 0) c = c > 0 ? '+' : '-';
        else c = c > 0 ? `+${c}` : c;
        if (c) result += c;
        if (i > 0 && c) result += x;
        if (i > 1 && c) result += `^${i}`;
    }

    return result[0] === '+' ? result.substr(1) : result;
}
console.log(expand("(-i-6)^2"))

/*
TEST

describe("expand()", function() {
    it("Should correctly expand binomials where a=1 and b is positive", function() {
        assert.strictEqual(expand("(x+1)^0"),"1");
        assert.strictEqual(expand("(x+1)^1"),"x+1");
        assert.strictEqual(expand("(x+1)^2"),"x^2+2x+1");
    });
    it("Should correctly expand binomials where a=1 and b is negative", function() {
        assert.strictEqual(expand("(x-1)^0"),"1");
        assert.strictEqual(expand("(x-1)^1"),"x-1");
        assert.strictEqual(expand("(x-1)^2"),"x^2-2x+1");
    });
    it("Should correctly expand binomials where a is positive.", function() {
        assert.strictEqual(expand("(5m+3)^4"),"625m^4+1500m^3+1350m^2+540m+81");
        assert.strictEqual(expand("(2x-3)^3"),"8x^3-36x^2+54x-27");
        assert.strictEqual(expand("(7x-7)^0"),"1");
    });
    it("Should correctly expand binomials where a is negative.", function() {
        assert.strictEqual(expand("(-5m+3)^4"),"625m^4-1500m^3+1350m^2-540m+81");
        assert.strictEqual(expand("(-2k-3)^3"),"-8k^3-36k^2-54k-27");
        assert.strictEqual(expand("(-7x-7)^0"),"1");
    });
});*/
