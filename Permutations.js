
function Permutator (arr) {
    let result = [];
    let tempArray= []
    function permutation(arr,tempArray) {
         if(arr.length !==0) {
            for (let i = 0; i < arr.length; i++) {
                //Pobiera wejsciowy array
                let current = arr.slice();
                //Wycina elementy wiekszej pozycji dookola elementu i
                let next = current.splice(i, 1);
                //Wycina element i i wkleja go do nowej tablicy (tempArray)
                permutation(
                    current.slice(),
                    tempArray.concat(next))
            }
            //Jezeli tablica jest pusta to wypisz tablice
        }else result.push(tempArray)
    }
    //Wywołaj funkcję
    permutation(arr, tempArray)
    return result;
}
console.log(Permutator([1,2,3]))