function formatDuration (n) {
    if(n === 0)return 'now';
    let ostatni;
    let sec = n%60
    let min = Math.floor(n/60)%60
    let hours = Math.floor(n/3600)%24
    let days = Math.floor(n/86400)%365
    let years = Math.floor(n/31536000)
    let stringcos = [years!==0?String(years)+(years===1?" year":" years"):"",days!==0?String(days)+(days===1?" day":" days"):"",hours!==0?String(hours)+(hours===1?" hour":" hours"):"",min!==0?String(min)+(min===1?" minute":" minutes"):"",sec!==0?String(sec)+(sec===1?" second":" seconds"):""].filter(x=>x!=="")
    if (stringcos.length ===1) return stringcos.pop()
    if (stringcos.length>1) ostatni=" and "+ stringcos.pop()

    return stringcos.join(", ")+ostatni
}

/*
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(formatDuration(1), "1 second");
        assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
        assert.strictEqual(formatDuration(120), "2 minutes");
        assert.strictEqual(formatDuration(3600), "1 hour");
        assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    });
});
*/
