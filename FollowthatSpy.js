function findRoutes(routes) {
   let x = [routes.shift()]
    while(routes.length){
       for(let a=0; a<routes.length; a++){
           if(x[x.length-1][1] === routes[a][0]){
               x.push(routes[a])
               routes.splice(a,1);
           }else if(x[0][0] === routes[a][1]){
               x.unshift(routes[a]);
               routes.splice(a,1);
           }
       }
    }
    return x.reduce((out, current) => {
        out.push(current[1]);
        return out
    },[x[0][0]]).join(", ")
}


console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]))
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// describe("Follow That Spy", function() {
//     it("Fixed", function() {
//         var routes1 = findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
//         Test.assertEquals(routes1, "MNL, TAG, CEB, TAC, BOR");
//         var routes2 = findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]);
//         Test.assertEquals(routes2, "UK, GER, BEL, CAN");
//         var routes3 = findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]);
//         Test.assertEquals(routes3, "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
//         var routes4 = findRoutes([["Agra", "Tokyo"], ["Seoul", "Ljubljana"], ["Ljubljana", "Wroclaw"], ["Wroclaw", "Nashville"], ["Nashville", "Amsterdam"], ["Amsterdam", "Hull"], ["Hull", "Vancouver"], ["Vancouver", "Agra"], ["Tokyo", "Manila"]]);
//         Test.assertEquals(routes4, "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila");
//         var routes5 = findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]);
//         Test.assertEquals(routes5, "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal");
//         var routes6 = findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]]);
//         Test.assertEquals(routes6, "USA, BRA, KSA, UAE, JPN, PHL");
//         var routes7 = findRoutes([["HQ", "SH"]]);
//         Test.assertEquals(routes7, "HQ, SH");
//         var routes8 = findRoutes([["San Policarpo", "Oras"], ["Balangiga", "Lawaan"], ["Borongan", "Maydolong"], ["Jipapad", "Maslog"], ["Balangkayan", "Llorente"], ["Mercedes", "Guiuan"], ["Taft", "Sulat"], ["Sulat", "San Julian"], ["Arteche", "San Policarpo"], ["Oras", "Dolores"], ["Dolores", "Can-avid"], ["Can-avid", "Taft"], ["San Julian", "Borongan"], ["Maydolong", "Balangkayan"], ["Llorente", "Hernani"], ["Hernani", "General MacArthur"], ["General MacArthur", "Giporlos"], ["Giporlos", "Balangiga"], ["Lawaan", "Salcedo"], ["Salcedo", "Mercedes"], ["Maslog", "Arteche"]]);
//         Test.assertEquals(routes8, "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan");
//     });
// });