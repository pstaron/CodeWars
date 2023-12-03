function dup(s) {
return s.map((x)=> x
    .split('')
    .filter((a,b) => a !== x[b-1])
    .join(''));
}
console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))