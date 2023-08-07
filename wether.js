// const options = {method: 'GET',
// headers: {accept: 'application/json'}};

// fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

// const options = async (s) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
           
//             console.log(s);
//             return resolve(s);
//         }, 2000);

//     })
// }


//

// const main = async (sr) => {
//     for(let i = 0; i < sr.length; i++){
//      result = await options(sr[i]);
//         // console.log(sr[i]);
//     }
//     // let result = await options();
// }
// async function rushabh(){
//     return 5;
// }
// rushabh().then(function ramani(){
//     alert(5);
// })
// async function main(){
//     let delhiwether = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 Degrees");
//             // console.log("27 Degrees delhi");
//         },1000)
//     })
//     let banglowether = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 Degrees");
//             // console.log("27 Degrees delhi");
//         },3000)
//     })
//     delhiwether.then((value)=>alert(value));
//     banglowether.then((value)=>alert(value));
// }
// console.log("we are the n   ;")
// main();
let text = document.getElementsByClassName("text");
const options = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            return resolve(true);
        }, seconds * 1000);
    });
};

let sr = ["Start hacking..", "Hacking in process...", "Hacked the server1.....", "Hacked the server2.....", "Hacked the server3......", "Krish system is hacked....."];

const main = async (message) => {
    await options(2);
    console.log(message);
    for (let i = 0; i < text.length; i++) {
        text[i].innerHTML = text[i].innerHTML +message + "<br>";
    }
};

(async () => {
    for (let i = 0; i < sr.length; i++) {
        await main(sr[i]);
    }
})();
