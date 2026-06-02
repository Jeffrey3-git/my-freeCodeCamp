const isValidSchema = obj => typeof(obj.username) === "string" && typeof(obj.posts) === "number" && typeof(obj.verified) === "boolean"


console.log(isValidSchema({ username: "alice", posts: 10, verified: false }));
console.log(isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }))
console.log(isValidSchema({ username: "frank", posts: "21", verified: true }));
console.log(isValidSchema({ username: "sam", posts: 17, verified: "false" }));
console.log(isValidSchema({ username: "bill", verified: true }));
console.log(isValidSchema({ username: "fred", verified: true }));
console.log(isValidSchema({ username: 5, posts: 10, verified: true }));
