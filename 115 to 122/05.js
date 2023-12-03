const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

let {title:t,
    developer:d,
    } = game;
let { releases:oo}  = game;
let o = Object.keys(oo)[0] ;
let {releases: {"Oath In Felghana":[u,j]}} = game;
let { releases:aa}  = game;
let a = Object.keys(aa)[1] ;
let { releases:{"Ark Of Napishtim":{US:u_price,JAP:j_price}}} = game;
let { releases:{ Origin: or }} = game;




console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD