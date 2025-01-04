//callback
function processUserInput(callback) {
    const name = "vijay";
    callback(name);
}
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to our website.`);
}
processUserInput(greetUser);
//async await
async function fun1() {
    setTimeout(()=>{
        console.log("Hello");
    },5000);
    console.log(await"hello")
}
arrowfunc = async()=>{
    setTimeout(()=>{
        console.log("KEC");
    },4000);
    console.log(await "kec")
}
fun1();
arrowfunc();
//promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected with an error!");
    }
});
myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });
