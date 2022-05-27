function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (!error) {
                console.log('Function: Your promise has been resolved');
                resolve("LMAO");
            } else {
                console.log("Function: Your promise has not been resolved");
                reject('Sorry not flfilled');
            }
        }, 2000);
    })
}
func1().then((resolve) => {
    console.log("Harry: Thanks for resolving, " + resolve)
}).catch((error) => {
    console.log("Harry: Very bad bro, Reason: " + error);
})