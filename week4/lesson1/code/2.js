let users = new Array();

let user1 = {
    name: "user1",
    age: 17,
    gender: "male",
};

let user2 = {
    name: "user2",
    age: 25,
    gender: "female",
};

let user3 = {
    name: "user3",
    age: 19,
    gender: "male",
};

// 0        1
// [user1, user2]


users.push(user1);
users.push(user2);
users.push(user3);

for(let i=0; i < users.length; ++i) {
    for(let key in users[i]) {
        console.log(users[i][key]);
    }
    console.log('\n');
}