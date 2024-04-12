let store  =  [
    {
        id: 1,
        name: 'smarphon',
        price: 500
    },
    {
        id: 2,
        name: 'keybord',
        price: 200
    },
    {
        id: 3,
        name: 'mousu',
        price: 100
    }
];
let money = 400

function getCheapItems(store, targetPrice) {
    return store.filter(item => item.price <= targetPrice);
}

const items = getCheapItems(store, 300);
console.log(items);
 ///

 