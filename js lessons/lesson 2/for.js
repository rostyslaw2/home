const store  = [
    {name: "phone", price: "100$"},
    {name: "keybord", price: "400$"},
    {name: "laptop", price: "1000$"},
    {name: "pc", price: "1500$"}
];

for (const { name, price } of store) {
    console.log(`${name} - ${price}`)
}

///

const payapp = {
    rust: 632,
    photoshop: 500,
    AfterEffects: 600
};

for (const key in payapp) {
    const price = payapp[key];
    console.log(`${key} - ${price}`);

}

///

for (let i = 0; i < 6; i++) {
    console.log(i);
}

///

const arr = ["a,s,d,a,s,d,a,s,d,a,s,d,a,s,d,a,s,d"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] );
}

///

let x = 0
while (x < 80) {
 console.log (x);
 x++;
}

/// 
//the end