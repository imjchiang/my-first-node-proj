// //node keyword require allows us to import modules
// const myModule = require("./myModule.js");
// const fs = require("fs");

// fs.readFile("story.txt", "utf8", (err, data) =>
// {
//     if (err)
//     {
//         console.log("There was a problem reading the file");
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log(myModule.beBasic());
// console.log(myModule.count());

// console.log("Hello World");


// let i = 0;

// const count = () =>
// {
//     console.log(i);
//     i++;
// }

//const myTimer = setInterval(count, 1000);

//const today = newDate();

//console.log(today);


const moment = require("moment");
// console.log(moment().format("MMM Do YYYY"));
// console.log(moment().format("MMM DD YYYY"));
// console.log(moment().format("MM DD YYYY"));
// console.log(moment().format("MM DD YY"));

console.log(moment().set(
{
    "month": 1,
    "year": 1998,
    "date": 26
}).format("dddd [the] Do [of] MMMM [in the year] YYYY"));
