let namber = [100, 2, 35, 567];

function sdaad(d) {

    d.sort(function (a, b) { return b - a; })
 console.log(d)
    return d[0]
}
console.log(sdaad(namber))

/////////////////////////////////////////////

let ghj = [ 1, 24, 3132, 24, 5, 1, 1]

 function fghh(q, u) {
    
    let count = 0;
    for (let i = 0; i < q.length; i++) {
        if (q[i] === u) {
            count++;
        }
        
    }
    return `число ${u} є в масиві ${count} стільки то раз`;
    
}

 console.log(fghh  (ghj, 24));

 /////////////////////////////////////////////////////////////////////////////////////////////////////////

 let c =  [ 91, 2964, 6748, 296900549, ]
 let i = c.map(x => x * 2)

 console.log(i)

 ////


 let word = ["hello"  , "room" ," our", "world" ]
 let word2 = word.map(x => x + "!")

 console.log(word2);

 //////////////////////////////////
 
 let qwe =  [ 91, 2964, 6748, 2969005492, ]
 let er = qwe.filter(x => x % 2 === 0)

 console.log(er);

 ////

 let wordf = ["hello" , "room"," our", "world" , "fr", "rt" ]

 let word3 = wordf.filter(x => x.length > 3)

 console.log(word3);