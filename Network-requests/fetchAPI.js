const textBtnEl = document.getElementById('getText');
const usersBtnEl = document.getElementById('getUsers');
const postBtnEl = document.getElementById('getPosts');


textBtnEl.addEventListener('click', () => {
    // fetch('lol.txt')
    //     .then((res) => {
    //         return (res.text());
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });

    fetch('lol.txt')
        .then((res) => res.text())
        .then((data) => {
            const outputEl = document.getElementById('output');

            outputEl.innerHTML = data;
        })
        .catch((error) => {
            console.log('error:something went wrong!');
        })
});

usersBtnEl.addEventListener('click', () => getUsers());

function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Users</h2>`;
            console.log(output);
            data.forEach((user) => {
                output += `
                   <ul>
                      <li> ID: ${user.id}</li>
                      <li> Name: ${user.name}</li>
                      <li> Email: ${user.email}</li>
                   </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

postBtnEl.addEventListener('click', () => getPosts());

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Users</h2>`;
            console.log(output);
            data.forEach((post) => {
                output += `
                   <div>
                     <h2>${post.title}</h2>
                     <p>${post.body}</p>
                   </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
