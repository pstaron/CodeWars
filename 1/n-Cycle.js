function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
function cycle(n) {
    let b =10

  if(gcd(n,b)!==1){return -1}
  else{
      let z = 1/n
      toString(z).map(x=>x===z[0])
      console.log(z)
      }




}

console.log(cycle(21))