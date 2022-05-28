
//Example 1: understood 😛

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


// Example 2: understood 😛

const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    }, {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
        console.log('get post');
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

// getPosts();
let newPost = {
    title: 'Post Three',
    body: 'This is post three'
};

createPost(newPost).then((resolve) => {
    getPosts();
}).catch((error) => {
    console.log('error: something went wrong');
})


// =====================================================

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye')
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((resp) =>
//     resp.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//     console.log(values));