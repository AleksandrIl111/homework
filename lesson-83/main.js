let user = {
    name: 'Александр Ильич',
    age: 25,
    city: 'Иркутск',
    greet: function (name) {
        return `Hello ${name}`;
    }
};



console.log(user.greet('Александр Ильич'));



let users = [
    { name: 'Alice', role: 'user' },
    { name: 'Bob', role: 'admin' },
    { name: 'Charlie', role: 'user' },
    { name: 'David', role: 'admin' },
    { name: 'Eve', role: 'user' }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].role !== 'admin') {
        simpleUsersCount++;
    }
}

console.log(simpleUsersCount);