// asynchronous actions: actions that initiate now but they finish later
// example: loading scripts and modules

// one such function is setTimeout function

//  loadScript(src) function that loads a script with a give src
// function loadScript(src) {
//     // creates a <script> tag and append it to the page
//     //  this causes the script with given src to start load

//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// this function inserts a script tag with given src into the document and the browser automatically starts loading it and executes when complete

// calling this function
// loadScript('/my/script.js');

// while this function takes some time to execute, JS doesn't wait and execute any code below the function

// and if the code below use that asyncronous function, it wouldn't work

// callback function is used to deal with these

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     document.onload = () => callback(script);

//     document.head.append(script);
// }
// .......................................

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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
        console.log('post created')
    }, 2000);
}

// getPosts();

createPost({
    title: 'Post Three',
    body: 'This is post three'
}, getPosts);

// #########################################

// console.log('hello');